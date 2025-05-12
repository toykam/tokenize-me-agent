import { decryptPrivateKey } from '@/lib/encryption';
import { prisma } from '@/lib/prisma';
import { signerWalletClient, viemClient } from '@/lib/viem';
import { NextResponse } from 'next/server';
import { formatEther, parseEther } from 'viem';
import dexAbi from "@/../blockchain/artifacts/contracts/TokenizedProfileDex.sol/TokenizedProfileDex.json"
import { DEX_CONTRACT } from '@/lib/utils';

export async function POST(
  req: Request
) {

  try {
    const info = await req.json();
    
    const {cast, user} = info.data;
    const { author } = cast;

    // console.log(author);

    const engagingUser = await prisma.user.findFirst({
      where: { fid: user.fid },
      include: {wallet: true, buyAmount: true}
    });

    if (engagingUser != null) {
      if (engagingUser!.buyAmount!.likeAmount > 0) {
        const engagingUserWallet = engagingUser.wallet!;
        const engagingUserAddress = engagingUserWallet.address ?? ""
        console.log(engagingUserWallet);
        const likeAmount = engagingUser!.buyAmount!.likeAmount ?? 0;

        const rawBalance = await viemClient.getBalance({
            address: engagingUserWallet.address as `0x${string}`
        });

        const balance = formatEther(rawBalance);

        const cost = (likeAmount + 0.0001);

        console.log("EngagingUserBalance ::: ", balance, " ::: ", cost);
        if (parseFloat(balance) > cost) {
          console.log("User have enough balance to buy token.");
          const authorUser = await prisma.user.findFirst({
            where: { fid: author.fid },
            include: { token: true, wallet: {select: {address: true}} }
          });

          if (authorUser != null) {
            console.log("AuthorToken ::: ", authorUser?.token);


            
            const authorTokenAddress = authorUser!.token!.address;
            const authorTokenFeeTier = authorUser!.token!.feeTier;
            const existingEngament = await prisma.engagement.findFirst({
              where: {postId: `${cast.hash}`, userId: engagingUser!.id},
            })
            const encryptedPrivateKeyData = {
              encrypted: engagingUserWallet.encryptedKey,
              iv: engagingUserWallet.iv,
              authTag: engagingUserWallet.authTag,
            };
            const engagingUserWalletPrivateKey = decryptPrivateKey(encryptedPrivateKeyData);
            const engagingUserWalletClient = signerWalletClient(engagingUserWalletPrivateKey);
  
            console.log(authorUser?.token);
  
            const { request } = await viemClient.simulateContract({
              address: DEX_CONTRACT as `0x${string}`,
              abi: dexAbi.abi,
              functionName: "swapETHForTokens",
              args: [
                authorTokenAddress,
                BigInt(0),
                Number(authorTokenFeeTier)
              ],
              value: parseEther(`${likeAmount}`),
              account: engagingUserWalletClient.account
            })
  
            // Execute the swap
            const txHash = await engagingUserWalletClient.writeContract(request);
            console.log('Swap transaction hash:', txHash);
  
            // Wait for the transaction to be mined (optional, depending on your needs)
            const receipt = await viemClient.waitForTransactionReceipt({ hash: txHash });
            console.log('Swap transaction mined:', receipt.transactionHash);
  
            // create an engagement entry in the db
            const tx = await prisma.tokenTransaction.create({
              data: {
                amount: likeAmount,
                fromAddress: engagingUserAddress,
                toAddress: authorUser?.wallet?.address ?? "",
                txHash: txHash,
                tokenAddress: authorTokenAddress!
              }
            })

            if (!existingEngament) {
              const engagement = await prisma.engagement.create({
                data: {
                  postId: `${cast.hash}`,
                  type: "like_and_reaction",
                  userId: engagingUser!.id,
                  tokenAddress: authorTokenAddress!
                }
              })
              await prisma.engagement.update({
                where: {id: engagement.id},
                data: {
                  tokenAddress: authorTokenAddress,
                  transactionid: tx.id
                }
              })
            }
          }


          return NextResponse.json({ status: 'ok' });
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
