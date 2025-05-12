import { decryptPrivateKey } from "@/lib/encryption";
import { prisma } from "@/lib/prisma";
import { DEX_CONTRACT } from "@/lib/utils";
import { signerWalletClient, viemClient } from "@/lib/viem";
import { NextResponse } from "next/server"
import { erc20Abi, formatEther, parseEther } from "viem";
import dexAbi from "@/../blockchain/artifacts/contracts/TokenizedProfileDex.sol/TokenizedProfileDex.json";

export const POST = async (request: Request) => {
    try {
        const { amount, tokenAddress, fid } = await request.json();

        console.log(amount, tokenAddress, fid);

        const user = await prisma.user.findFirst({
            where: {fid},
            select: {wallet: true}
        });
        if (user == null) {
            return NextResponse.json({message: "User not found"}, {status: 404})
        }
        
        if (user.wallet == null) {
            return NextResponse.json({message: "User not found"}, {status: 404})
        }

        const userWallet = user.wallet!;

        // confirm balance is enough
        const rawBalance = await viemClient.readContract({
            address: tokenAddress as `0x${string}`,
            abi: erc20Abi,
            functionName: "balanceOf",
            args: [userWallet.address as `0x${string}`]
        });

        const tokenBalance = Number(formatEther(rawBalance));

        if (amount > tokenBalance) {
            return NextResponse.json({message: "Insufficient token balance"}, {status: 400})
        }

        // lets approve the dex contract to able to spend the token.
        const userPK = decryptPrivateKey({
            authTag: userWallet.authTag,
            encrypted: userWallet.encryptedKey,
            iv: userWallet.iv
        });

        if (!userPK) {
            return NextResponse.json({message: "Something went wrong."}, {status: 400})
        }

        const userWallerClient = signerWalletClient(userPK);

        const approvalHash = await userWallerClient.writeContract({
            abi: erc20Abi,
            address: tokenAddress,
            functionName: "approve",
            args: [
                DEX_CONTRACT as `0x${string}`,
                parseEther(`${amount}`)
            ]
        });

        const {status} = await viemClient.waitForTransactionReceipt({
            hash: approvalHash
        })

        if (status == "reverted") {
            console.log("Approval Reverted ");
            return NextResponse.json({message: "Something went wrong."}, {status: 400})
        }

        console.log('Token approved')
        const sellHash = await userWallerClient.writeContract({
            abi: dexAbi.abi,
            functionName: "swapTokensForETH",
            address: DEX_CONTRACT as `0x${string}`,
            args: [
                tokenAddress,
                parseEther(`${amount}`),
                BigInt(0),
                Number(`${10000}`)
            ]
        });

        console.log(sellHash);

        const {status: sellStatus} = await viemClient.waitForTransactionReceipt({
            hash: sellHash
        })

        if (sellStatus == "reverted") {
            console.log("Swap failed...")
            return NextResponse.json({message: "Something went wrong."}, {status: 400})
        }
        console.log("Swap successful");

        return NextResponse.json({message: 'Sell successful'}, {status: 200})
    } catch (error) {
        console.log("CatchError ::: ", error);
        return NextResponse.json({message: 'Unable to sell token'}, {status: 500});
    }
}