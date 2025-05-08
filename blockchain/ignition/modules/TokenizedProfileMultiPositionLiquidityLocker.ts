// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Base Mainnet Addresses
const UNISWAP_V3_POSITION_MANAGER = "0x03a520b32c04bf3beef7beb72e919cf822ed34f1"; // Base Mainnet UniswapV2 Router


const TokenizedProfileMultiPositionLiquidityLockerModule = buildModule("TokenModule", (m: any) => {
  // Get deployment parameters with defaults

  const positionManager = UNISWAP_V3_POSITION_MANAGER;
  const feeCollector = "0xEAf75B465F791b24C3B3E17a2F4793A67e3941fD";

  // Deploy TokenFactory
  const tokenFactory = m.contract("TokenizedProfileMultiPositionLiquidityLocker", [
    positionManager,
    feeCollector
  ]);

  return { tokenFactory };
});

export default TokenizedProfileMultiPositionLiquidityLockerModule;
