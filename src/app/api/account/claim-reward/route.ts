import { decryptPrivateKey } from "@/lib/encryption";
import { prisma } from "@/lib/prisma";
import { LP_LOCKER_CONTRACT } from "@/lib/utils";
import { signerWalletClient, viemClient } from "@/lib/viem";
import { NextResponse } from "next/server"
import lpLockerAbi from "@/../blockchain/artifacts/contracts/TokenizedProfileMultiPositionLiquidityLocker.sol/TokenizedProfileMultiPositionLiquidityLocker.json";

export const POST = async (req: Request) => {
    try {
        const { fid } = await req.json();

        const user = await prisma.user.findFirst({
            where: {fid},
            select: {wallet: true, token: true}
        })

        if (!user) {
            return NextResponse.json({message: `User not found...`}, {status: 404})
        }
        
        if (user.token == null) {
            return NextResponse.json({message: `User not found...`}, {status: 404})
        }
        
        if (user.wallet == null) {
            return NextResponse.json({message: `User not found...`}, {status: 404})
        }

        const userWallet = user.wallet;

        const pk = decryptPrivateKey({
            authTag: userWallet.authTag,
            encrypted: userWallet.encryptedKey,
            iv: userWallet.iv
        });

        if (!pk) {
            return NextResponse.json({message: `User not found...`}, {status: 404})
        }
        const userWalletClient = signerWalletClient(pk);

        const { request } = await viemClient.simulateContract({
            address: LP_LOCKER_CONTRACT as `0x${string}`,
            abi: lpLockerAbi.abi,
            functionName: "collectAllFees",
            account: userWalletClient.account
        });

        const hash = await userWalletClient.writeContract(request);

        const { status } = await viemClient.waitForTransactionReceipt({hash: hash})

        if (status == "reverted") {
            return NextResponse.json({message: `Unable to claim fees...`}, {status: 404})
        }

        return NextResponse.json({message: `All fees have been claimed`, hash}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: `Error: ${error}`}, {status: 500});
    }
}