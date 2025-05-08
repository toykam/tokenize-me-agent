import { createDefaultMetadataKeyInterceptor, getSSLHubRpcClient } from '@farcaster/hub-nodejs';

export const farcasterAgentClient = getSSLHubRpcClient(
    "hub-grpc-api.neynar.com",
    {
        interceptors: [
            createDefaultMetadataKeyInterceptor('x-api-key', '6bd9b5a5-f32f-4936-9077-d589485bc9bb')
        ]
    }
);