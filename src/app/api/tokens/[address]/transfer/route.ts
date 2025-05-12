import { decryptPrivateKey } from "@/lib/encryption";
import { prisma } from "@/lib/prisma";
import { signerWalletClient, viemClient } from "@/lib/viem";
import { NextResponse } from "next/server"
import { erc20Abi, formatEther, parseEther } from "viem";


export const POST = async (request: Request) => {
    try {
        const { amount, tokenAddress, fid, recipient } = await request.json();

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

        const amountInEther = parseEther(`${amount}`)

        let transferHash;

        if (tokenAddress == "ETH") {
            // confirm balance is enough
            const rawBalance = await viemClient.getBalance({
                address: userWallet.address as `0x${string}`
            });

            const tokenBalance = Number(formatEther(rawBalance));

            if (amount > tokenBalance) {
                return NextResponse.json({message: "Insufficient ETH balance"}, {status: 400})
            }

            transferHash = await userWallerClient.sendTransaction({
                to: recipient as `0x${string}`,
                value: amountInEther
            })
        } else {
            const token = await prisma.token.findFirst({
                where: {address: tokenAddress}
            })
            
            if (!token) {
                return NextResponse.json({message: "Something went wrong."}, {status: 400})
            }

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

            transferHash = await userWallerClient.writeContract({
                abi: erc20Abi,
                functionName: "transfer",
                address: token.address as `0x${string}`,
                args: [
                    recipient as `0x${string}`,
                    amountInEther
                ]
            });
        }
        

        console.log(transferHash);

        const {status: sellStatus} = await viemClient.waitForTransactionReceipt({
            hash: transferHash
        })

        if (sellStatus == "reverted") {
            console.log("Swap failed...")
            return NextResponse.json({message: "Something went wrong."}, {status: 400})
        }
        console.log("Transfer successful");

        return NextResponse.json({message: 'Transfer successful'}, {status: 200})
    } catch (error) {
        console.log("CatchError ::: ", error);
        return NextResponse.json({message: 'Unable to sell token'}, {status: 500});
    }
}