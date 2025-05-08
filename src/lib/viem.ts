import { createPublicClient, createWalletClient, http } from "viem"
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains"

export const viemClient = createPublicClient({
    transport: http(),
    chain: base
});

export const signerWalletClient = (privateKey: string) => {
    const deployerAccount = privateKeyToAccount(privateKey as `0x${string}`);
    return createWalletClient({
        account: deployerAccount,
        chain: base,
        transport: http(),
    });
}


