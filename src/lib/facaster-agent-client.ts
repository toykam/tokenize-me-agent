import { NeynarAPIClient } from '@neynar/nodejs-sdk';

export const farcasterClient = new NeynarAPIClient({
    apiKey: process.env.NEYNAR_API_KEY!
});

export const farcasterAgentClient = {
  publishCast: async ({ text, parent_hash }: { text: string; parent_hash: string }) => {
    return farcasterClient.publishCast({
        signerUuid: process.env.AGENT_SIGNER_UUID!,
        text,
        parent: parent_hash
    });
  },
  getAgentFidByUsername: async (username: string): Promise<number> => {
    const response = await farcasterClient.lookupUserByUsername({username});
    if (!response?.user?.fid) {
      throw new Error('Agent FID not found for the given username.');
    }
    console.log(response);
    return Number(response.user.fid);
  },
};