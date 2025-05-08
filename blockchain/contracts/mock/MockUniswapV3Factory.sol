// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Factory.sol";
import "./MockUniswapV3Pool.sol";

contract MockUniswapV3Factory is IUniswapV3Factory {
    mapping(address => mapping(address => mapping(uint24 => address))) public override getPool;
    address private _owner;

    event PoolCreated(address indexed token0, address indexed token1, uint24 fee, address pool);

    constructor() {
        _owner = msg.sender;
    }

    function createPool(address tokenA, address tokenB, uint24 fee) external override returns (address pool) {
        require(tokenA != tokenB, "Identical tokens");
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), "Zero address");
        require(getPool[token0][token1][fee] == address(0), "Pool already exists");

        pool = address(new MockUniswapV3Pool(token0, token1, fee));
        getPool[token0][token1][fee] = pool;
        getPool[token1][token0][fee] = pool;

        emit PoolCreated(token0, token1, fee, pool);
    }

    function owner() external view override returns (address) {
        return _owner;
    }

    function setOwner(address _newOwner) external override {
        require(msg.sender == _owner, "Not authorized");
        _owner = _newOwner;
    }

    function feeAmountTickSpacing(uint24) external pure override returns (int24) {
        return 60;
    }

    function enableFeeAmount(uint24, int24) external override {
        require(msg.sender == _owner, "Not authorized");
    }
}