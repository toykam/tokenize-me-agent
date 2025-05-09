import { decryptPrivateKey } from '@/lib/encryption';
import { prisma } from '@/lib/prisma';
import { signerWalletClient, viemClient } from '@/lib/viem';
import { NextResponse } from 'next/server';
import { erc20Abi, ethAddress, formatEther, parseEther } from 'viem';
import dexAbi from "@/../blockchain/artifacts/contracts/TokenizedProfileDex.sol/TokenizedProfileDex.json"
import { DEX_CONTRACT } from '@/lib/utils';

export async function POST(
  req: Request
) {

  try {
    const info = await req.json();
    console.log(info);
    
    const {cast, user} = info.data;
    const { author } = cast;


    console.log(author);

    const engagingUser = await prisma.user.findFirst({
      where: { fid: user.fid },
      include: {wallet: true, buyAmount: true}
    });

    if (engagingUser != null) {
      if (engagingUser!.buyAmount!.likeAmount > 0) {
        const engagingUserWallet = engagingUser.wallet!;
        const likeAmount = engagingUser!.buyAmount!.likeAmount ?? 0;
        const engagingUserBalance = await viemClient.getBalance({
          address: engagingUser.wallet?.address as `0x${string}`
        });

        const balance = parseFloat(formatEther(engagingUserBalance));

        console.log("EngagingUserBalance ::: ", balance);
        if ((balance + 0.0005) > likeAmount) {
          console.log("User have enough balance to buy token.");
          const authorUser = await prisma.user.findFirst({
            where: { fid: author.fid },
            include: { token: true }
          });

          console.log("AuthorToken ::: ", authorUser?.token);
  
          const authorTokenAddress = authorUser?.token?.address;
          const encryptedPrivateKeyData = {
            encrypted: engagingUserWallet.encryptedKey,
            iv: engagingUserWallet.iv,
            authTag: engagingUserWallet.authTag,
          };
          const engagingUserWalletPrivateKey = decryptPrivateKey(encryptedPrivateKeyData);
          const engagingUserWalletClient = signerWalletClient(engagingUserWalletPrivateKey);

          const currentTime = Math.floor(Date.now() / 1000);
          const deadline = currentTime + 10 * 60; // 10 minutes

          const { request } = await viemClient.simulateContract({
            address: DEX_CONTRACT as `0x${string}`,
            abi: dexAbi.abi,
            functionName: "swapETHForTokens",
            args: [
              authorTokenAddress,
              BigInt(0),
              BigInt(deadline),
              Number(3000)
            ],
            value: parseEther(`${likeAmount + 0.0003}`),
            account: engagingUserWalletClient.account
          })

          // Execute the swap
          const txHash = await engagingUserWalletClient.writeContract(request);
          console.log('Swap transaction hash:', txHash);

          // Wait for the transaction to be mined (optional, depending on your needs)
          const receipt = await viemClient.waitForTransactionReceipt({ hash: txHash });
          console.log('Swap transaction mined:', receipt.transactionHash);

          return NextResponse.json({ status: 'ok', txHash });

        }
      }
    }
    return NextResponse.json({ status: 'ok' });

  } catch (error: any) {
    console.error("Error fetching mentions:", error);
    if (error instanceof Error) {
        console.error("Error details:", error);
        // Check if it's the specific initialization error from the credentials check
        if (error.message.includes("Missing Twitter API credentials")) {
             return NextResponse.json({ status: 'error', message: error.message }, { status: 500 });
        }
    }
    // Generic error for other issues
    return NextResponse.json({ status: 'error', message: 'Failed to fetch mentions.' }, { status: 500 });
  }
}
