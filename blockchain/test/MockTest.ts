import { expect } from "chai";
import hardhat from "hardhat";
import {
  TokenFactory,
  SocialToken,
  MockWETH,
  MockUniswapV3Factory,
  MockNonfungiblePositionManager,
  TokenFactory__factory,
  TokenizedProfileMultiPositionLiquidityLocker,
} from "../typechain-types";
import { ContractTransactionReceipt, Signer } from "ethers";

describe("TokenFactory", function () {
  let tokenFactory: TokenFactory;
  let socialTokenFactory: SocialToken;
  let tokenFactoryContractFactory: TokenFactory__factory;

  let owner: Signer, dev: Signer, tokenOwner: Signer;
  let weth: MockWETH;
  let factory: MockUniswapV3Factory;
  let positionManager: MockNonfungiblePositionManager;
  let liquidityLocker: TokenizedProfileMultiPositionLiquidityLocker;

  const deployFixture = async () => {
    console.log('Deplying fixture....');
    [owner, dev, tokenOwner] = await hardhat.ethers.getSigners();

    const wethFactory = await hardhat.ethers.getContractFactory("MockWETH");
    weth = await wethFactory.deploy() as MockWETH;
    await weth.waitForDeployment();


    const wethAddress = await weth.getAddress();

    const factoryFactory = await hardhat.ethers.getContractFactory("MockUniswapV3Factory");
    factory = await factoryFactory.deploy() as MockUniswapV3Factory;
    await factory.waitForDeployment();

    const positionManagerFactory = await hardhat.ethers.getContractFactory("MockNonfungiblePositionManager");
    positionManager = await positionManagerFactory.deploy() as MockNonfungiblePositionManager;
    await positionManager.waitForDeployment();


    const liquidityLockerFactory = await hardhat.ethers.getContractFactory("TokenizedProfileMultiPositionLiquidityLocker");
    liquidityLocker = await liquidityLockerFactory.deploy() as TokenizedProfileMultiPositionLiquidityLocker;
    await liquidityLocker.waitForDeployment();

    tokenFactoryContractFactory = await hardhat.ethers.getContractFactory("TokenFactory");
    
    tokenFactory = await tokenFactoryContractFactory.deploy(
      await dev.getAddress(),
      await positionManager.getAddress(),
      await factory.getAddress(),
      await weth.getAddress(),
      await liquidityLocker.getAddress()
    ) as TokenFactory;

    await tokenFactory.waitForDeployment();
  };

  beforeEach(async () => {
    await deployFixture();
  });

  it("should deploy a token and add liquidity", async () => {
    const socialTokenFactory = await hardhat.ethers.getContractFactory("SocialToken");
    const socialToken = await socialTokenFactory.deploy(
      "Test Token",
      "TEST",
      await tokenOwner.getAddress(),
      await dev.getAddress(),
      await positionManager.getAddress(),
      "handle",
      "platform",
      "url"
    ) as SocialToken;
    await socialToken.waitForDeployment();
    const totalSupply = await socialToken.totalSupply();
    const tokenAmount = totalSupply;
    await socialToken.connect(tokenOwner).approve(await tokenFactory.getAddress(), tokenAmount);

    const tx = await tokenFactory.connect(owner).deployToken(
      "Test Token",
      "TEST",
      "handle",
      "platform",
      "url",
      { value: hardhat.ethers.parseEther("0"), gasLimit: 8_000_000 }
    );

    const receipt = await tx.wait() as ContractTransactionReceipt;

    const tokenDeployedEvent = receipt.logs
      .map(log => tokenFactory.interface.parseLog(log))
      .find(parsed => parsed?.name === "TokenDeployed");

    console.log(tokenDeployedEvent);

    expect(tokenDeployedEvent).to.exist;
    const deployedTokenAddress = tokenDeployedEvent?.args.tokenAddress;
    expect(deployedTokenAddress).to.be.properAddress;

    const deployedToken = await hardhat.ethers.getContractAt("SocialToken", deployedTokenAddress, tokenOwner) as SocialToken;
    const tokenId = await deployedToken.positionTokenId();
    expect(tokenId).to.be.greaterThan(0n);
  });
});
