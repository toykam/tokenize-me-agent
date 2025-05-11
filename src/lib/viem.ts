import { createPublicClient, createWalletClient, http } from "viem"
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains"


const chain = base;

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


