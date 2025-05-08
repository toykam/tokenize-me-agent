// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SocialTokenModule = buildModule("SocialTokenModule", (m: any) => {
  // Get deployment parameters with defaults

  // Deploy TokenFactory
  const tokenFactory = m.contract("SocialToken", [
    'test token',
    'ttt',
    'toekan',
    'platform',
    'url'
  ]);

  return { tokenFactory };
});

export default SocialTokenModule;
