// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";

contract MockUniswapV3Pool is IUniswapV3Pool {
    address public immutable override factory;
    address public immutable override token0;
    address public immutable override token1;
    uint24 public immutable override fee;

    constructor(address _token0, address _token1, uint24 _fee) {
        token0 = _token0;
        token1 = _token1;
        fee = _fee;
        factory = msg.sender;
    }

    // Immutables
    function tickSpacing() external pure override returns (int24) {
        return 60;
    }

    function maxLiquidityPerTick() external pure override returns (uint128) {
        return type(uint128).max;
    }

    // State changing
    function initialize(uint160) external override {}

    function mint(address, int24, int24, uint128, bytes calldata) external override returns (uint256, uint256) {
        return (0, 0);
    }

    function collect(address recipient, int24 tickLower, int24 tickUpper, uint128 amount0Requested, uint128 amount1Requested) 
        external override returns (uint128 amount0, uint128 amount1) {
        return (0, 0);
    }

    function collectProtocol(address recipient, uint128 amount0Requested, uint128 amount1Requested) 
        external override returns (uint128 amount0, uint128 amount1) {
        return (0, 0);
    }

    function burn(int24, int24, uint128) external override returns (uint256, uint256) {
        return (0, 0);
    }

    function swap(address, bool, int256, uint160, bytes calldata) external override returns (int256, int256) {
        return (0, 0);
    }

    function flash(address, uint256, uint256, bytes calldata) external override {}

    function setFeeProtocol(uint8, uint8) external override {}

    // New required function
    function increaseObservationCardinalityNext(uint16) external override {}

    // State views
    function slot0() external pure override returns (uint160, int24, uint16, uint16, uint16, uint8, bool) {
        return (0, 0, 0, 0, 0, 0, false);
    }

    function feeGrowthGlobal0X128() external pure override returns (uint256) {
        return 0;
    }

    function feeGrowthGlobal1X128() external pure override returns (uint256) {
        return 0;
    }

    function protocolFees() external pure override returns (uint128, uint128) {
        return (0, 0);
    }

    function liquidity() external pure override returns (uint128) {
        return 0;
    }

    function ticks(int24) external pure override returns (uint128, int128, uint256, uint256, int56, uint160, uint32, bool) {
        return (0, 0, 0, 0, 0, 0, 0, false);
    }

    function tickBitmap(int16) external pure override returns (uint256) {
        return 0;
    }

    function positions(bytes32) external pure override returns (uint128, uint256, uint256, uint128, uint128) {
        return (0, 0, 0, 0, 0);
    }

    function observations(uint256) external pure override returns (uint32, int56, uint160, bool) {
        return (0, 0, 0, false);
    }

    // Derived state views
    function observe(uint32[] calldata) external pure override returns (int56[] memory, uint160[] memory) {
        int56[] memory tickCumulatives = new int56[](1);
        uint160[] memory secondsPerLiquidityCumulativeX128s = new uint160[](1);
        return (tickCumulatives, secondsPerLiquidityCumulativeX128s);
    }

    function snapshotCumulativesInside(int24, int24) external pure override returns (int56, uint160, uint32) {
        return (0, 0, 0);
    }
}