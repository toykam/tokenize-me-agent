// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Base Mainnet Addresses
const UNISWAP_V3_POSITION_MANAGER = "0x03a520b32c04bf3beef7beb72e919cf822ed34f1"; // Base Mainnet UniswapV2 Router
const UNISWAP_V3_FACTORY = "0x33128a8fc17869897dce68ed026d694621f6fdfd"; // Base Mainnet UniswapV2 Factory
const WETH_ADDRESS = "0x4200000000000000000000000000000000000006"; // Base Mainnet UniswapV2 Factory

const TokenModule = buildModule("TokenModule", (m: any) => {
  // Get deployment parameters with defaults
  const devAddress = "0xEAf75B465F791b24C3B3E17a2F4793A67e3941fD";
  const positionManager = UNISWAP_V3_POSITION_MANAGER;
  const uniswapFactory = UNISWAP_V3_FACTORY;
  const wethAddress = WETH_ADDRESS;

  // Deploy TokenFactory
  const tokenFactory = m.contract("TokenFactory", [
    devAddress,
    positionManager,
    uniswapFactory,
    wethAddress
  ]);

  return { tokenFactory };
});

export default TokenModule;
