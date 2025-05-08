import { encryptPrivateKey } from '@/lib/encryption';
import { farcasterAgentClient } from '@/lib/facaster-agent-client';
import { prisma } from '@/lib/prisma';
import { createLinkedAccount, createUser, createWalletForUser, getUserByFID, initializeEngagementBuyAmount } from '@/lib/services/user.service';
import { DEPLOYER_PRIVATE_KEY, TOKEN_FACTORY_CONTRACT } from '@/lib/utils';
import { signerWalletClient, viemClient } from '@/lib/viem';
import { Wallet } from 'ethers';
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
    const { author } = info.data;

    let user = await getUserByFID(author.fid);

    if (!user) {
      console.log("This is a new user ::: ")
      user = await createUser({
        displayName: author.display_name,
        fid: author.fid,
        username: author.username
      });
      
      // i want the agent to respond
      const wallet = await createWalletForUser(user.id);
      const buyAmounts = await initializeEngagementBuyAmount(user.id);
      const linkedAccount = await createLinkedAccount({
        platform: "Farcaster",
        platformAccountId: `${author.fid}`,
        userId: user.id,
        username: `${author.username}`
      });
      
      const responseText = `Hey @${info.data.author.username}, welcome to the world of profile tokenization, your profile token will created shortly. A wallet have been created for you ${wallet.address}. You can export the wallet in your profile page using our frame`;
      await farcasterAgentClient.publishCast({
        text: responseText,
        parent_hash: info.data.hash, // Reply to the mentioning cast
      });

      user = await getUserByFID(author.fid);
    }

    // now go ahead to 
    let userToken = await prisma.token.findFirst({
      where: {
        userId: user.id
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

    const ownerAddress = user.wallet.address;

    const tokenConfig = {
      'name': `${author.display_name}`,
      'symbol': `${author.username}`.toUpperCase(),
      "handle": `${author.username}`,
      "platform": "Farcaster",
      "profileurl": `https://warpcast.com/${author.username}`,
      "salt": '',
      // 'initialTick': -227240,
      'initialTick': -207240,
      '_fee': 3000
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
        user.wallet.address,
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
        userId: user.id,
        address: salt[1],
        decimals: 18,
        name: tokenConfig.name,
        symbol: tokenConfig.symbol,
        totalSupply: 1000000000,
      }
    })


    const responseText = `Hey @${info.data.author.username}, Your account have been successfully tokenized.\nCA: ${token.address}\nName: ${token.name}\nSymbol: ${token.symbol}\n\nYour tokenized profile can be traded anywhere on the dex.`;
      await farcasterAgentClient.publishCast({
        text: responseText,
        parent_hash: info.data.hash, // Reply to the mentioning cast
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
