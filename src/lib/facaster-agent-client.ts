import { NeynarAPIClient } from '@neynar/nodejs-sdk';

export const farcasterClient = new NeynarAPIClient({
    apiKey: process.env.NEYNAR_API_KEY!,
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
  deleteAllCast: async () => {
    const casts = await farcasterClient.fetchCastsForUser({
      fid: Number(`${process.env.AGENT_FID!}`),
      limit: 10
    })
    console.log(casts);
    return true;
  },
  getAllCasts: async (fid: number) => {
      let allCasts: any[] = [];
      let cursor = undefined;
      
      try {
          do {
              const response = await farcasterClient.fetchCastsForUser({
                  fid: fid,
                  limit: 100, // Maximum limit per request
                  cursor: cursor
              });

              if (response.casts && response.casts.length > 0) {
                  allCasts = [...allCasts, ...response.casts];
                  cursor = response.next?.cursor;
              } else {
                  cursor = null;
              }
          } while (cursor);

          return allCasts;
      } catch (error) {
          console.error('Error fetching casts:', error);
          throw error;
      }
  },

  getAgentCasts: async () => {
      const agentFid = Number(process.env.AGENT_FID!);
      if (!agentFid) {
          throw new Error('Agent FID not found in environment variables');
      }
      return farcasterAgentClient.getAllCasts(agentFid);
  }
};