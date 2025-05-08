// app/api/poll/route.ts

import { client } from '@/lib/twitter-client';
import { NextResponse } from 'next/server';

let lastCheckedId: string | null = null;

export async function GET() {

  try {

    // explain this code
    // This code is setting up a stream rule for the Twitter API to listen for tweets that mention the agent user ID and contain the phrase "put me onchain".
    const streams = await client.v2.updateStreamRules({
      add: [
        {
          value: `@${process.env.AGENT_USER_ID} put me onchain`,
          tag: 'Tokenize Request'
        }
      ]
    });

    streams.data.forEach((rule: { tag: any; value: any; }) => {
      console.log(`Rule added: ${rule.tag} - ${rule.value}`);
    });
    // This code is fetching the latest mentions of the agent user ID from Twitter API.

    // how do i get the stream data from the streams?

    const mentions = await client.v2.userMentionTimeline(process.env.AGENT_USER_ID!, {
      since_id: lastCheckedId ?? undefined,
      expansions: ['author_id'],
      'user.fields': ['username', 'name'],
      'tweet.fields': ['created_at', 'text'],
      max_results: 1,
    });

    const newestId = mentions.data?.meta?.newest_id;

    for (const tweet of mentions.data?.data || []) {
      const text = tweet.text.toLowerCase();
      
      if (text.toLowerCase().includes('put me onchain')) {
        const requestingUser = mentions.data.includes?.users?.find((user: { id: any; }) => user.id === tweet.author_id);
        const username = requestingUser ? requestingUser.username : tweet.author_id;

        console.log(`Tokenize request from @${username}`);
        console.log("Tweet Detail: ", tweet);
        // TODO: Add logic to interact with your tokenization service/smart contract
      }
    }

    if (newestId) {
      lastCheckedId = newestId;
    }

    return NextResponse.json({ status: 'ok', checkedUntilId: lastCheckedId });

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
