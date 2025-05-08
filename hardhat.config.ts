import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0000000000000000000000000000000000000000000000000000000000000000";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "paris",
      metadata: {
        bytecodeHash: "ipfs",
        appendCBOR: true
      }
    }
  },
  networks: {
    base: {
      url: "https://mainnet.base.org",
      chainId: 8453,
      accounts: [PRIVATE_KEY],
    },
    'base-tinderly': {
      url: "https://virtual.base.rpc.tenderly.co/5f3a8fed-29a0-441e-8dce-8250430f42c3",
      chainId: 8453,
      accounts: [PRIVATE_KEY],
    },
    "base-sepolia": {
      url: "https://sepolia.base.org",
      chainId: 84532,
      accounts: [PRIVATE_KEY]
    }
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: {
      base: process.env.BASESCAN_API_KEY || "",
      "base-sepolia": process.env.BASESCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      },
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  },
  paths: {
    root: "./blockchain"
  }
};

export default config;
