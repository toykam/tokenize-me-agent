import { config } from "dotenv";
import { CdpClient } from "@coinbase/cdp-sdk"
import { Coinbase, Wallet } from "@coinbase/coinbase-sdk"
import { viemClient } from "@/lib/viem";
import { prisma } from "@/lib/prisma";

config();

// const cdp = new CdpClient();

const main = async () => {
    
    let coinbase = Coinbase.configure({
        apiKeyName: process.env.CDP_API_KEY_ID!,
        privateKey: process.env.CDP_API_KEY_SECRET!
    })

    const wallet = await Wallet.create();

    console.log(`Wallet Default Address ::: ${wallet.getDefaultAddress()}`)

    // const userwallets = await prisma.userWallet.findMany({});

    // userwallets.forEach(async (value, index) => {
    //     const account = await cdp.evm.createAccount({
    //         name: value.userId,
    //         idempotencyKey: value.userId
    //     });

    //     await prisma.userWallet.update({
    //         where: {id: value.id},
    //         data: {
    //             address: account.address
    //         }
    //     })
    // })
    // const account = await cdp.evm.getOrCreateAccount({
    //     address: "0xEAf75B465F791b24C3B3E17a2F4793A67e3941fD"
    // });
    
    // console.log(account.address);

    // const {transactionHash} = await cdp.evm.requestFaucet({
    //     address: account.address,
    //     network: "base-sepolia",
    //     token: "eth"
    // })

    // const {status} = await viemClient.waitForTransactionReceipt({
    //     hash: transactionHash
    // })

    // console.log("Status ::: ", status);

    // const { balances, nextPageToken }= await cdp.evm.listTokenBalances({
    //     address: "0xEAf75B465F791b24C3B3E17a2F4793A67e3941fD",
    //     network: "base"
    // })

    // console.log(balances, '  ', nextPageToken);
}


main().catch(error => console.log(`Error ::: `, error))