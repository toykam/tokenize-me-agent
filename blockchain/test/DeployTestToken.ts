import { expect } from "chai";
import hre from "hardhat";
import { JsonRpcProvider, ContractTransactionReceipt, Wallet, ethers } from "ethers";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe("Deploy Social Token", function () {
  this.timeout(300000); // 5 minutes timeout

  let tokenFactory: any;
  let owner: Wallet;
  let smartContractAddress: string;

  before(async () => {
    // Connect to Base network with deployer's private key
    const baseProvider = new JsonRpcProvider(process.env.NEXT_PUBLIC_BASE_RPC_URL);
    owner = new Wallet(process.env.PRIVATE_KEY || "", baseProvider);

    // Verify we're connected to the right network
    const network = await baseProvider.getNetwork();
    expect(network.chainId).to.equal(8453n); // Base chainId

    // smartContractAddress = "0xf1aCf4ede1f0595E2842724c659e6F7Ae66457a4"; // Updated contract address
    smartContractAddress = "0x6F7fBd2B4B6eCFdec1177cB98e45628993807AdA"; // Working TokenFactory contract address
    // smartContractAddress = "0xAD881F5F5aCa1ecF3FD8ceBD0e0C02f09983111E"; // Working TokenFactory contract address working

    // Connect to the deployed TokenFactory contract
    const TokenFactory = await hre.ethers.getContractFactory("TokenFactory", owner);
    tokenFactory = TokenFactory.attach(smartContractAddress);

    // Verify we can connect to the contract
    const factoryOwner = await tokenFactory.owner();
    console.log("TokenFactory owner:", factoryOwner);
    console.log("Current wallet:", await owner.getAddress());
  });

  it("should deploy a social token", async () => {
    const ownerAddress = await owner.getAddress();
    console.log("Deploying token for address:", ownerAddress);

    // Set up Debug event listener
    tokenFactory.on("Debug", (message: string, value: bigint) => {
      console.log(`\x1b[36m[Debug Event]\x1b[0m ${message}: ${value.toString()}`);
    });

    tokenFactory.on("DebugIntValues", (message: string, value: bigint) => {
      console.log(`\x1b[36m[Debug Event]\x1b[0m ${message}: ${value.toString()}`);
    });

    // Get current gas price and add a buffer
    const provider = owner.provider;
    if (!provider) throw new Error("No provider available");
    
    const feeData = await provider.getFeeData();
    const maxFeePerGas = feeData.maxFeePerGas ? feeData.maxFeePerGas * 2n : undefined;
    const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ? feeData.maxPriorityFeePerGas * 2n : undefined;

    const feeConfig = { 
      value: hre.ethers.parseEther("0"), // Increased ETH amount
      gasLimit: 9_000_000,
      maxFeePerGas,
      maxPriorityFeePerGas
    };

    console.log("Current gas parameters:", feeConfig);

    const nonce = Math.random().toString(36).substring(2);
    const newSalt = ethers.id(nonce); // Generate bytes32 salt

    const tokenConfig = {
      'name': "TokenizeMeAgent",
      'symbol': "tokenizeme".toUpperCase(),
      "handle": "tokenizeme",
      "platform": "Farcaster",
      "profileurl": "https://warpcast.com/~/notifications",
      "salt": newSalt,
      // 'initialTick': -227240,
      'initialTick': -207240,
      '_fee': 3000
      // '_fee': 3000
    };
    
    console.log("TokenConfig :: ", tokenConfig)
    

    // Get balance to ensure we have enough ETH
    const balance = await provider.getBalance(ownerAddress);
    console.log("Current balance:", hre.ethers.formatEther(balance), "ETH");

    // Deploy the token
    try {
      console.log("Preparing deployToken transaction...");
      
      // Try to simulate the transaction first
      const salt = await tokenFactory.generateSalt(
        ownerAddress,
        tokenConfig.name, 
        tokenConfig.symbol,
        tokenConfig.handle, 
        tokenConfig.platform,
        tokenConfig.profileurl
      );

      tokenConfig.salt = salt[0];
      console.log("Generated Salt ", salt)
      console.log("TokenConfig ", tokenConfig)
      // get address
      // const predictedAddress = await tokenFactory.predictTokenAddress(
      //   ownerAddress,
      //   tokenConfig.name, 
      //   tokenConfig.symbol,
      //   tokenConfig.handle, 
      //   tokenConfig.platform,
      //   tokenConfig.profileurl,
      //   tokenConfig.salt
      // );

      // console.log("Predicted Address ::: ", predictedAddress);

      // Encode function data first to verify it's correct
      const deployData = tokenFactory.interface.encodeFunctionData("deployToken", [
        tokenConfig.name,
        tokenConfig.symbol,
        ownerAddress,
        tokenConfig.handle,
        tokenConfig.platform,
        tokenConfig.profileurl,
        tokenConfig.initialTick,
        tokenConfig._fee,
        tokenConfig.salt
      ]);
      console.log("Encoded transaction data:", deployData);

      const tx = await tokenFactory.deployToken(
        tokenConfig.name,
        tokenConfig.symbol,
        ownerAddress,
        tokenConfig.handle,
        tokenConfig.platform,
        tokenConfig.profileurl,
        tokenConfig.initialTick,
        tokenConfig._fee,
        tokenConfig.salt,
        feeConfig,
      );

      console.log("Transaction hash:", tx.hash);
      console.log("Waiting for confirmations...");
      
      const receipt = await tx.wait(3) as ContractTransactionReceipt; // Wait for 3 confirmations
      
      if (receipt.status === 0) {
        // Try to simulate the transaction to get more error details
        try {
          await tokenFactory.deployToken.staticCall(
            tokenConfig.name,
            tokenConfig.symbol,
            ownerAddress,
            tokenConfig.handle,
            tokenConfig.platform,
            tokenConfig.profileurl,
            tokenConfig.initialTick,
            tokenConfig._fee,
            tokenConfig.salt,
            feeConfig
          );
        } catch (simError: any) {
          console.error("Transaction simulation failed:", simError);
        }
        throw new Error("Transaction failed - token deployment reverted");
      }

      // Get the deployed token address from events
      const tokenDeployedEvent = receipt.logs
        .map(log => tokenFactory.interface.parseLog(log))
        .find(parsed => parsed?.name === "TokenDeployed");

      if (!tokenDeployedEvent) {
        throw new Error("TokenDeployed event not found in transaction logs");
      }

      const deployedTokenAddress = tokenDeployedEvent.args.tokenAddress;
      console.log("Social token deployed successfully at:", deployedTokenAddress);

      // Connect to the deployed token contract
      const socialToken = await hre.ethers.getContractAt("SocialToken", deployedTokenAddress, owner);
      
      // Verify token details
      const name = await socialToken.name();
      const symbol = await socialToken.symbol();
      const tokenOwner = await socialToken.owner();
      // const tokenId = await socialToken.positionTokenId();

      console.log("Token details:");
      console.log("- Name:", name);
      console.log("- Symbol:", symbol);
      console.log("- Owner:", tokenOwner);
      // console.log("- Position Token ID:", tokenId.toString());

      // Wait before verification
      console.log("Waiting 60 seconds before verification...");
      await delay(30000);

      // Verify the deployed token contract
      try {
        await hre.run("verify:verify", {
          address: deployedTokenAddress,
          contract: "contracts/SocialToken.sol:SocialToken",
          constructorArguments: [
            tokenConfig.name,
            tokenConfig.symbol,
            tokenConfig.handle,
            tokenConfig.platform,
            tokenConfig.profileurl
          ]
        });
        console.log("SocialToken verified successfully");
      } catch (error: any) {
        if (error.message.toLowerCase().includes("already verified")) {
          console.log("SocialToken already verified");
        } else {
          console.error("Error verifying SocialToken:", error);
        }
      }

    } catch (error: any) {
      console.error("Error deploying token:", error);
      if (error.data) {
        // If there's contract revert data, try to decode it
        try {
          const decodedError = tokenFactory.interface.parseError(error.data);
          console.error("Decoded error:", decodedError);
        } catch (decodeError) {
          console.error("Could not decode error data");
        }
      }
      throw error;
    }
  });
});
