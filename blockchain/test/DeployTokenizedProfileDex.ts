import { expect } from "chai";
import hardhat from "hardhat";
import {
    TokenizedProfileDex,
  TokenizedProfileMultiPositionLiquidityLocker
} from "../typechain-types";
import { Signer, Wallet } from "ethers";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe("Deploy TokenizedProfileDex", function () {
  // Increase timeout for live network
  this.timeout(300000); // 5 minutes since we're deploying multiple contracts

  let tokenizedProfileDex: TokenizedProfileDex;
  let owner: Signer;

  before(async () => {
    // Connect to Base network with deployer's private key
    const baseProvider = new hardhat.ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_BASE_RPC_URL);
    owner = new Wallet(process.env.PRIVATE_KEY || "", baseProvider);

    // Verify we're connected to the right network
    const network = await baseProvider.getNetwork();
    expect(network.chainId).to.equal(8453n); // Base chainId


    const weth = "0x4200000000000000000000000000000000000006";
    const swapRouter = "0x2626664c2603336E57B271c5C0b26F421741e481";

    // Deploy new TokenFactory
    console.log("Deploying TokenizedProfileDex...");
    const tokenizedProfileDexFactory = await hardhat.ethers.getContractFactory("TokenizedProfileDex");
    tokenizedProfileDex = await tokenizedProfileDexFactory.deploy(
        swapRouter,
        weth,
    ) as TokenizedProfileDex;

    const tokenizedProfileDexTx = tokenizedProfileDex.deploymentTransaction();
    if (!tokenizedProfileDexTx) throw new Error("TokenFactory deployment failed");
    await tokenizedProfileDexTx.wait(5);
    const tokenizedProfileDexDexAddress = await tokenizedProfileDex.getAddress();
    console.log("TokenizedProfileDex deployed at:", tokenizedProfileDexDexAddress);

    // Wait before verification
    console.log("Waiting 10 seconds before verification...");
    await delay(10000);

    // Verify TokenFactory contract
    try {
      await hardhat.run("verify:verify", {
        address: tokenizedProfileDexDexAddress,
        contract: "contracts/TokenizedProfileDex.sol:TokenizedProfileDex",
        constructorArguments: [
            swapRouter,
            weth
        ]
      });
      console.log("TokenizedProfileDex verified successfully");
    } catch (error: any) {
      if (error.message.toLowerCase().includes("already verified")) {
        console.log("TokenizedProfileDex already verified");
      } else {
        console.error("Error verifying TokenizedProfileDex:", error);
      }
    }
  });

  it("should deploy dex", async () => {
    const ownerAddress = await owner.getAddress();
    console.log(ownerAddress);
    expect(ownerAddress).is.not.equal("")
  });
});
