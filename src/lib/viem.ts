import { createPublicClient, createWalletClient, http } from "viem"
import { privateKeyToAccount } from "viem/accounts";
import { base, baseSepolia } from "viem/chains"


const chain = baseSepolia;

export const viemClient = createPublicClient({
    transport: http(),
    chain: chain
});

export const signerWalletClient = (privateKey: string) => {
    const deployerAccount = privateKeyToAccount(privateKey as `0x${string}`);
    return createWalletClient({
        account: deployerAccount,
        chain: chain,
        transport: http(),
    });
}


