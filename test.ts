// import { prisma } from "@/lib/prisma";
// import { config } from "dotenv";
// import tokenFactoryAbi from "@/../blockchain/artifacts/contracts/TokenFactory.sol/TokenFactory.json"
// import { privateKeyToAccount } from "viem/accounts";
// import { DEPLOYER_PRIVATE_KEY, TOKEN_FACTORY_CONTRACT } from "@/lib/utils";
// import { signerWalletClient, viemClient } from "@/lib/viem";

// config();

// // const cdp = new CdpClient();

// const main = async () => {
//     const token = await prisma.token.findFirst({
//         include: {user: {
//             include: {wallet: true},
//         }},
//         where: {upgraded: false}
//     });

//     // 

//     if (token != null) {
//         console.log(`Deploying token ${token.address}...`);
//         // deploy the token
//         const tokenConfig = {
//             'name': `${token.name}`,
//             'symbol': `${token.symbol}`.toUpperCase(),
//             "handle": `${token.user.username}`,
//             "platform": "Farcaster",
//             "profileurl": `https://warpcast.com/${token.user.username}`,
//             "salt": '',
//             // 'initialTick': -227240,
//             'initialTick': -207200,
//             '_fee': 10000
//             // '_fee': 3000
//         };
    
//         const account = privateKeyToAccount(`0x${DEPLOYER_PRIVATE_KEY}` as `0x${string}`)
    
    
//         const salt: any = await viemClient.readContract({
//             address: TOKEN_FACTORY_CONTRACT as `0x${string}`,
//             abi: tokenFactoryAbi.abi,
//             functionName: 'generateSalt',
//             args: [
//                 account.address,
//                 tokenConfig.name, 
//                 tokenConfig.symbol,
//                 tokenConfig.handle, 
//                 tokenConfig.platform,
//                 tokenConfig.profileurl
//             ],
//             account
//         });
    
//         console.log(salt)
    
//         tokenConfig.salt = salt[0];
    
//         console.log(tokenConfig);
//         console.log(token.user.wallet?.address);
//         console.log(TOKEN_FACTORY_CONTRACT);
    
//         const deployedToken: any = await signerWalletClient(`0x${DEPLOYER_PRIVATE_KEY}`).writeContract({
//             address: TOKEN_FACTORY_CONTRACT as `0x${string}`,
//             abi: tokenFactoryAbi.abi,
//             functionName: 'deployToken',
//             args: [
//                 tokenConfig.name,
//                 tokenConfig.symbol,
//                 account.address,
//                 token.user.wallet?.address,
//                 tokenConfig.handle,
//                 tokenConfig.platform,
//                 tokenConfig.profileurl,
//                 tokenConfig.initialTick,
//                 tokenConfig._fee,
//                 tokenConfig.salt
//             ],
//             account,
//         });
        
//         await prisma.token.update({
//             where: {address: token.address},
//             data: {
//                 address: salt[1],
//                 upgraded: true,
//                 feeTier: tokenConfig._fee
//             }
//         });
    
//         console.log(`Token ${token.symbol} is deployed to ${salt[1]} and updated successfully`);
//     }

// }




// main().catch(error => console.log(`Error ::: `, error))


// const main = async () => {
//     const network_id = '1'; // See https://docs.chainbase.com/reference/supported-chains to get the id of different chains.
//     const token_addr = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'; // Take Uniswap as an example.
//     const start_time = '1675209600'; // 2023-02-01 00:00:00 GMT in the format of epoch time.
//     const end_time = '1677628800'; // 2023-03-01 00:00:00 GMT in the format of epoch time.

//     fetch(`https://api.chainbase.online/v1/token/price/history?chain_id=${network_id}&contract_address=${token_addr}&from_timestamp=${start_time}&end_timestamp=${end_time}`, {
//         method: 'GET',
//         headers: {
//             'x-api-key': CHAINBASE_API_KEY, // Replace the field with your API key.
//             'accept': 'application/json'
//         }
//     }).then(response => response.json())
//         .then(data => console.log(data.data))
//         .catch(error => console.error(error));
// }