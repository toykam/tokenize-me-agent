// import { expect } from "chai";
// import hre from "hardhat";
// import { JsonRpcProvider, ContractTransactionReceipt, Wallet } from "ethers";

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// describe("Remove LP From Token", function () {
//   this.timeout(300000); // 5 minutes timeout

//   let tokenFactory: any;
//   let owner: Wallet;
//   let positionManagerAddress: string;

//   before(async () => {
//     // Connect to Base network with deployer's private key
//     const baseProvider = new JsonRpcProvider(process.env.NEXT_PUBLIC_BASE_RPC_URL);
//     owner = new Wallet(process.env.PRIVATE_KEY || "", baseProvider);

//     // Verify we're connected to the right network
//     const network = await baseProvider.getNetwork();
//     expect(network.chainId).to.equal(8453n); // Base chainId

//     positionManagerAddress = "0x03a520b32c04bf3beef7beb72e919cf822ed34f1";

//   });

//   it("should remove liquidity from a token position", async () => {
//     const tokenAddress = "0x12b388DD0fE9a98f80db541DcDC2eEa96F6576ef";
//     const socialToken = await hre.ethers.getContractAt("SocialToken", tokenAddress, owner);
    
//     const ownerAddress = await owner.getAddress();
//     console.log("Owner address:", ownerAddress);
    
//     // First verify we are the owner of the SocialToken
//     const tokenOwner = await socialToken.owner();
//     expect(tokenOwner).to.equal(ownerAddress, "Not the owner of SocialToken");
    
//     const positionId = await socialToken.positionTokenId();
//     console.log("Position ID to remove liquidity from:", positionId.toString());

//     // Get the NonfungiblePositionManager contract
//     const positionManager = await hre.ethers.getContractAt(
//         "INonfungiblePositionManager",
//         positionManagerAddress,
//         owner
//     );

//     // Check who owns the position NFT
//     const nftOwner = await positionManager.ownerOf(positionId);
//     console.log("Position NFT owner:", nftOwner);
//     expect(nftOwner).to.equal(ownerAddress, "Not the owner of NFT position");

//     try {
//         // Approve the SocialToken contract to manage the NFTs
//         console.log("Setting approval for SocialToken contract...");
//         const approveTx = await positionManager.setApprovalForAll(tokenAddress, true);
//         await approveTx.wait();
//         console.log("NFT approval set successfully");

//         // Now remove liquidity through the SocialToken contract
//         console.log("Removing liquidity through SocialToken contract...");
//         const removeTx = await socialToken.removeLiquidity();
//         const removeReceipt = await removeTx.wait();
//         console.log("Removed liquidity successfully:", removeReceipt?.hash);

//         // Verify position was removed
//         const newPositionId = await socialToken.positionTokenId();
//         expect(newPositionId).to.equal(0n, "Position ID should be reset to 0");
//         console.log("New position ID:", newPositionId.toString());
//     } catch (error: any) {
//         console.error("Error removing liquidity:", error?.shortMessage || error);
//         throw error;
//     }
//   });
// });
