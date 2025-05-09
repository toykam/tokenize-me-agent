/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockUniswapV3Pool,
  MockUniswapV3PoolInterface,
} from "../../../contracts/mock/MockUniswapV3Pool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_fee",
        type: "uint24",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "Collect",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "CollectProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid1",
        type: "uint256",
      },
    ],
    name: "Flash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextOld",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextNew",
        type: "uint16",
      },
    ],
    name: "IncreaseObservationCardinalityNext",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol0Old",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol1Old",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol0New",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol1New",
        type: "uint8",
      },
    ],
    name: "SetFeeProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "amount0Requested",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1Requested",
        type: "uint128",
      },
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "amount0Requested",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1Requested",
        type: "uint128",
      },
    ],
    name: "collectProtocol",
    outputs: [
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeGrowthGlobal0X128",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "feeGrowthGlobal1X128",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "flash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "increaseObservationCardinalityNext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "maxLiquidityPerTick",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "int56[]",
        name: "",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "",
        type: "uint160[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "positions",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFees",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "setFeeProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slot0",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "snapshotCumulativesInside",
    outputs: [
      {
        internalType: "int56",
        name: "",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "",
        type: "int16",
      },
    ],
    name: "tickBitmap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "tickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "ticks",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "int56",
        name: "",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610100346100a757601f61093f38819003918201601f19168301916001600160401b038311848410176100ac578084926060946040528339810103126100a757610048816100c2565b906040610057602083016100c2565b9101519162ffffff831683036100a75760a05260c05260e0523360805260405161086890816100d7823960805181610272015260a0518161070c015260c05181610212015260e051816101d90152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b03821682036100a75756fe60806040908082526004918236101561001757600080fd5b600092833560e01c9283630dfe1681146106f857508263128acb08146106a15782631a686502146106865782631ad8b03b14610667578263252c09d71461063a57826332148f67146106195782633850c7bd146105db5782633c8a7d8d1461057757826346141319146101b8578263490e6cbc146105375782634f1eb3d8146104e1578263514ea4bf146104ae5782635339c2961461048757826370cf754a146104655782638206a4d11461043b57826385b6672914610405578263883bdbfd1461031357508163a34123a7146102d9578163a38807f2146102a1578163c45a01551461025d578163d0c93a7c14610241578163d21220a7146101fd578163ddca3f43146101bd578163f3058399146101b8578163f30dba9314610165575063f637731d1461014557600080fd5b346101625760203660031901126101625761015e61073b565b5080f35b80fd5b9050346101b45760203660031901126101b457610100916101846107a4565b50808251928184528160208501528301528060608301528060808301528060a08301528060c083015260e0820152f35b5080fd5b6107e0565b9050346101b457816003193601126101b4576020905162ffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b9050346101b457816003193601126101b457517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9050346101b457816003193601126101b45760209051603c8152f35b9050346101b457816003193601126101b457517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9050346101b457806003193601126101b4576060916102be6107a4565b506102c7610784565b50815191818352816020840152820152f35b8234610162576060366003190112610162576102f36107a4565b506102fc610784565b506103056107ca565b508151908082526020820152f35b8382346101b4576020928360031936011261040157803567ffffffffffffffff918282116103fd57366023830112156103fd578101359182116103f957602490369260051b0101116101b457916103686107fc565b91600191828452808401908036833761037f6107fc565b848152818101968236893780519681880191885251809152606087019390855b8181106103e357505050858303868301525180835291810195925b8281106103c75785870386f35b83516001600160a01b03168752958101959281019284016103ba565b825160060b86529484019491840191870161039f565b8380fd5b8480fd5b8280fd5b5082346101625760603660031901126101625761042061073b565b506024356001600160801b03811603610162576103056107ca565b915034610401573660031901126101b4573560ff8116036101625760243560ff8116036101625780f35b8382346101b457816003193601126101b457602090516001600160801b038152f35b9091503461040157602036600319011261040157358060010b036101b45751908152602090f35b8382346101b45760203660031901126101b4578160a0928251928184528160208501528301528060608301526080820152f35b5082346101625760a0366003190112610162576104fc61073b565b50610505610784565b5061050e610794565b506105176107b4565b506084356001600160801b03811603610162578151908082526020820152f35b8390346101b45760803660031901126101b45761055261073b565b506064359067ffffffffffffffff82116104015761057291369101610756565b505080f35b8390346101b45760a03660031901126101b45761059261073b565b5061059b610784565b506105a4610794565b506105ad6107b4565b5060843567ffffffffffffffff8111610401576105cc91369101610756565b50508151908082526020820152f35b8382346101b457816003193601126101b4578160e0928251928184528160208501528301528060608301528060808301528060a083015260c0820152f35b8390346101b45760203660031901126101b4573561ffff8116036101625780f35b8382346101b45760203660031901126101b457816080928251928184528160208501528301526060820152f35b5082346101625780600319360112610162578151908082526020820152f35b8382346101b457816003193601126101b45751908152602090f35b8390346101b45760a03660031901126101b4576106bc61073b565b50602435801515036101b4576064356001600160a01b038116036101b45760843567ffffffffffffffff8111610401576105cc91369101610756565b8490346101b457816003193601126101b4577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b600435906001600160a01b038216820361075157565b600080fd5b9181601f840112156107515782359167ffffffffffffffff8311610751576020838186019501011161075157565b602435908160020b820361075157565b604435908160020b820361075157565b600435908160020b820361075157565b606435906001600160801b038216820361075157565b604435906001600160801b038216820361075157565b3461075157600036600319011261075157602060405160008152f35b604051906040820182811067ffffffffffffffff82111761081c57604052565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220fab5f632dd52618072602c5470fed2d6a67a70def89cfdd4e626ec70eaa08c0b64736f6c63430008140033";

type MockUniswapV3PoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockUniswapV3PoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockUniswapV3Pool__factory extends ContractFactory {
  constructor(...args: MockUniswapV3PoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token0: AddressLike,
    _token1: AddressLike,
    _fee: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token0, _token1, _fee, overrides || {});
  }
  override deploy(
    _token0: AddressLike,
    _token1: AddressLike,
    _fee: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token0, _token1, _fee, overrides || {}) as Promise<
      MockUniswapV3Pool & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockUniswapV3Pool__factory {
    return super.connect(runner) as MockUniswapV3Pool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUniswapV3PoolInterface {
    return new Interface(_abi) as MockUniswapV3PoolInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockUniswapV3Pool {
    return new Contract(address, _abi, runner) as unknown as MockUniswapV3Pool;
  }
}
