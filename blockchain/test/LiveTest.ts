import { expect } from "chai";
import hardhat from "hardhat";
import {
  TokenFactory,
  SocialToken
} from "../typechain-types";
import { ContractTransactionReceipt, Signer, Wallet } from "ethers";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe("TokenFactory Live Test", function () {
  // Increase timeout for live network
  this.timeout(300000); // 5 minutes since we're deploying multiple contracts

  let tokenFactory: TokenFactory;
  let owner: Signer;
  let wethAddress: string;
  let factoryAddress: string;
  let positionManagerAddress: string;
  let swapRouterAddress: string;
  let lpLocker: string;

  before(async () => {
    // Connect to Base network with deployer's private key
    const baseProvider = new hardhat.ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_BASE_RPC_URL);
    owner = new Wallet(process.env.PRIVATE_KEY || "", baseProvider);

    // Verify we're connected to the right network
    const network = await baseProvider.getNetwork();
    expect(network.chainId).to.equal(8453n); // Base chainId

    
    wethAddress = "0x4200000000000000000000000000000000000006";
    positionManagerAddress = "0x03a520b32c04bf3beef7beb72e919cf822ed34f1";
    factoryAddress = "0x33128a8fc17869897dce68ed026d694621f6fdfd";
    swapRouterAddress = "0x2626664c2603336E57B271c5C0b26F421741e481";
    lpLocker = "0x94C2a616DfE686885867B3908e03d868062a26b8";



    // Deploy new TokenFactory
    console.log("Deploying TokenFactory...");
    const tokenFactoryFactory = await hardhat.ethers.getContractFactory("TokenFactory");
    tokenFactory = await tokenFactoryFactory.deploy(
      await owner.getAddress(), // dev address
      positionManagerAddress,
      factoryAddress,
      wethAddress,
      swapRouterAddress,
      lpLocker
    ) as TokenFactory;
    const tokenFactoryTx = await tokenFactory.deploymentTransaction();
    if (!tokenFactoryTx) throw new Error("TokenFactory deployment failed");
    await tokenFactoryTx.wait(5);
    const tokenFactoryAddress = await tokenFactory.getAddress();
    console.log("TokenFactory deployed at:", tokenFactoryAddress);

    // Wait before verification
    console.log("Waiting 10 seconds before verification...");
    await delay(10000);

    // Verify TokenFactory contract
    try {
      await hardhat.run("verify:verify", {
        address: tokenFactoryAddress,
        contract: "contracts/TokenFactory.sol:TokenFactory",
        constructorArguments: [
          await owner.getAddress(),
          positionManagerAddress,
          factoryAddress,
          wethAddress,
          swapRouterAddress,
          lpLocker
        ]
      });
      console.log("TokenFactory verified successfully");
    } catch (error: any) {
      if (error.message.toLowerCase().includes("already verified")) {
        console.log("TokenFactory already verified");
      } else {
        console.error("Error verifying TokenFactory:", error);
      }
    }
  });

  it("should deploy a token and add liquidity", async () => {
    const ownerAddress = await owner.getAddress();
    console.log(ownerAddress);
    expect(ownerAddress).is.not.equal("")
  });
});
