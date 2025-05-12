
import { farcasterAgentClient, farcasterClient } from '@/lib/facaster-agent-client';
import { prisma } from '@/lib/prisma';
import { createLinkedAccount, createUser, createWalletForUser, getUserByFID, initializeEngagementBuyAmount } from '@/lib/services/user.service';
import { DEPLOYER_PRIVATE_KEY, ENGAGEMENT_WEBHOOK_ID, TOKEN_FACTORY_CONTRACT } from '@/lib/utils';
import { signerWalletClient, viemClient } from '@/lib/viem';

import { NextResponse } from 'next/server';
import tokenFactoryAbi from "@/../blockchain/artifacts/contracts/TokenFactory.sol/TokenFactory.json"
import { privateKeyToAccount } from 'viem/accounts';
import { config } from 'dotenv';

config();

export async function POST(
  req: Request
) {

  try {

    const info = await req.json();
    const { author, text } = info.data;

    let user = await getUserByFID(author.fid);

    if (!user) {
      // console.log("This is a new user ::: ")
      const usr = await createUser({
        displayName: author.display_name,
        fid: author.fid,
        username: author.username
      });
      
      // i want the agent to respond
      const wallet = await createWalletForUser(usr.id);
      await initializeEngagementBuyAmount(usr.id);
      await createLinkedAccount({
        platform: "Farcaster",
        platformAccountId: `${author.fid}`,
        userId: usr.id,
        username: `${author.username}`
      });
      
      const responseText = `Hey @${info.data.author.username}, welcome to the world of profile tokenization, your profile token will created shortly. A wallet have been created for you ${wallet.address}. You can export the wallet in your profile page using our frame. ${process.env.NEXT_PUBLIC_URL}/account`;
      await farcasterAgentClient.publishCast({
        text: responseText,
        parent_hash: info.data.hash, // Reply to the mentioning cast
      });

      user = await getUserByFID(author.fid);
    }


    const triggerPhrases = ['put me onchain', 'tokenize me', 'tokenize my profile'];
    const shouldProceed = triggerPhrases.some(phrase => text.toLowerCase().includes(phrase.toLowerCase()));
    if (!shouldProceed) {
      const responseText = `Hey @${info.data.author.username}, Do you want to tokenize your profile? Just tell me to put you onchain, and boom you will become tradeable onchain.`;
      await farcasterAgentClient.publishCast({
        text: responseText,
        parent_hash: info.data.hash, // Reply to the mentioning cast
      });
      console.log('No trigger phrase detected, skipping swap.');
      return NextResponse.json({ status: 'ok', message: 'No action taken.' });
    }

    // now go ahead to 
    const userToken = await prisma.token.findFirst({
      where: {
        userId: user!.id
      }
    });

    if (userToken) {
      const responseText = `Hey @${info.data.author.username}, It seems you already tokenized your profile already. CA: ${userToken.address}`;
      await farcasterAgentClient.publishCast({
        text: responseText,
        parent_hash: info.data.hash, // Reply to the mentioning cast
      });
      return NextResponse.json({ status: 'ok' });
    }

    const account = privateKeyToAccount(`0x${DEPLOYER_PRIVATE_KEY}` as `0x${string}`)

    const ownerAddress = user!.wallet?.address;

    const tokenConfig = {
      'name': `${author.display_name}`,
      'symbol': `${author.username}`.toUpperCase(),
      "handle": `${author.username}`,
      "platform": "Farcaster",
      "profileurl": `https://warpcast.com/${author.username}`,
      "salt": '',
      // 'initialTick': -227240,
      'initialTick': -207200,
      '_fee': 10000
      // '_fee': 3000
    };

    const salt: any = await viemClient.readContract({
      address: TOKEN_FACTORY_CONTRACT as `0x${string}`,
      abi: tokenFactoryAbi.abi,
      functionName: 'generateSalt',
      args: [
        account.address,
        tokenConfig.name, 
        tokenConfig.symbol,
        tokenConfig.handle, 
        tokenConfig.platform,
        tokenConfig.profileurl
      ],
      account
    });

    console.log("Salt ::: ", salt);
    
    tokenConfig.salt = salt[0];

    // const { result } = await viemClient.simulateContract()
    
    const deployedToken: any = await signerWalletClient(`0x${DEPLOYER_PRIVATE_KEY}`).writeContract({
      address: TOKEN_FACTORY_CONTRACT as `0x${string}`,
      abi: tokenFactoryAbi.abi,
      functionName: 'deployToken',
      args: [
        tokenConfig.name,
        tokenConfig.symbol,
        account.address,
        ownerAddress,
        tokenConfig.handle,
        tokenConfig.platform,
        tokenConfig.profileurl,
        tokenConfig.initialTick,
        tokenConfig._fee,
        tokenConfig.salt
      ],
      account,
    });

    console.log("Deployed Token ::: ", deployedToken);
    // new lets deploy the token for the user so that it can be tradeable

    const token = await prisma.token.create({
      data: {
        userId: user!.id,
        address: salt[1],
        decimals: 18,
        name: tokenConfig.name,
        symbol: tokenConfig.symbol,
        totalSupply: 1000000000,
        feeTier: 10000
      }
    })


    const responseText = `Hey @${info.data.author.username}, Your account have been successfully tokenized.\nCA: ${token.address}\nName: ${token.name}\nSymbol: ${token.symbol}\n\nYour tokenized profile can be traded anywhere on the dex. \n\n${process.env.NEXT_PUBLIC_URL}/tokens/${token.address}`;
      await farcasterAgentClient.publishCast({
        text: responseText,
        parent_hash: info.data.hash, // Reply to the mentioning cast
      });

      // update webhook

      const existingEngagementWebhook = await farcasterClient.lookupWebhook({
        webhookId: ENGAGEMENT_WEBHOOK_ID
      });
      let fids: number[] = [];
      if (existingEngagementWebhook.success == true) {
        fids = existingEngagementWebhook.webhook?.subscription?.filters?.['reaction.created']?.target_fids ?? [];
      } else {
        const allusers = await prisma.user.findMany({select: {fid: true}})
        fids = allusers.map((v) => v.fid);
      }
      farcasterClient.updateWebhook({
        webhookId: ENGAGEMENT_WEBHOOK_ID,
        name: "Engagement Tracker",
        url: "https://1531-102-88-111-194.ngrok-free.app/api/warpcast/engagement",
        subscription: {
          "reaction.created": {
            target_fids: fids
          }
        }
      });
    return NextResponse.json({ status: 'ok' });

  } catch (error: any) {
    console.error("Error fetching mentions:", error.rateLimit);
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
