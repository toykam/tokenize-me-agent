import { expect } from "chai";
import hardhat from "hardhat";
import {
  TokenizedProfileMultiPositionLiquidityLocker
} from "../typechain-types";
import { Signer, Wallet } from "ethers";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe("Deploy LP Locker", function () {
  // Increase timeout for live network
  this.timeout(300000); // 5 minutes since we're deploying multiple contracts

  let lpLocker: TokenizedProfileMultiPositionLiquidityLocker;
  let owner: Signer;
  let positionManagerAddress: string;

  before(async () => {
    // Connect to Base network with deployer's private key
    const baseProvider = new hardhat.ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_BASE_RPC_URL);
    owner = new Wallet(process.env.PRIVATE_KEY || "", baseProvider);

    // Verify we're connected to the right network
    const network = await baseProvider.getNetwork();
    expect(network.chainId).to.equal(8453n); // Base chainId


    positionManagerAddress = "0x03a520b32c04bf3beef7beb72e919cf822ed34f1";

    // Deploy new TokenFactory
    console.log("Deploying LP Locker...");
    const lpLockerFactory = await hardhat.ethers.getContractFactory("TokenizedProfileMultiPositionLiquidityLocker");
    lpLocker = await lpLockerFactory.deploy(
        positionManagerAddress,
        await owner.getAddress(), // dev address
    ) as TokenizedProfileMultiPositionLiquidityLocker;
    const lpLockerFactoryTX = await lpLocker.deploymentTransaction();
    if (!lpLockerFactoryTX) throw new Error("TokenFactory deployment failed");
    await lpLockerFactoryTX.wait(5);
    const lopLockerAddress = await lpLocker.getAddress();
    console.log("LPLocker deployed at:", lopLockerAddress);

    // Wait before verification
    console.log("Waiting 10 seconds before verification...");
    await delay(10000);

    // Verify TokenFactory contract
    try {
      await hardhat.run("verify:verify", {
        address: lopLockerAddress,
        contract: "contracts/TokenizedProfileMultiPositionLiquidityLocker.sol:TokenizedProfileMultiPositionLiquidityLocker",
        constructorArguments: [
            positionManagerAddress,
            await owner.getAddress()
        ]
      });
      console.log("LPLocker verified successfully");
    } catch (error: any) {
      if (error.message.toLowerCase().includes("already verified")) {
        console.log("LPLocker already verified");
      } else {
        console.error("Error verifying LPLocker:", error);
      }
    }
  });

  it("should deploy a token and add liquidity", async () => {
    const ownerAddress = await owner.getAddress();
    console.log(ownerAddress);
    expect(ownerAddress).is.not.equal("")
  });
});
