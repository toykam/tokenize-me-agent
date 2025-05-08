// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../INonfungiblePositionManager.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockNonfungiblePositionManager is INonfungiblePositionManager, ERC721 {
    address public immutable override factory;
    address public immutable override WETH9;
    uint256 public tokenIdCounter;

    constructor(address _WETH9) ERC721("Mock Position NFT", "MPNFT") {
        factory = address(0); // Mock factory address
        WETH9 = _WETH9;
    }

    function mint(MintParams calldata params) external payable override returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1) {
        require(params.deadline >= block.timestamp, "Deadline expired");
        require(params.token0 < params.token1, "Invalid token order");

        if (params.amount0Desired > 0) {
            IERC20(params.token0).transferFrom(msg.sender, address(this), params.amount0Desired);
        }
        if (params.amount1Desired > 0) {
            IERC20(params.token1).transferFrom(msg.sender, address(this), params.amount1Desired);
        }

        tokenId = ++tokenIdCounter;
        _mint(params.recipient, tokenId);

        liquidity = 1000;
        amount0 = params.amount0Desired;
        amount1 = params.amount1Desired;
    }

    function collect(CollectParams calldata) external payable override returns (uint256 amount0, uint256 amount1) {
        return (0, 0);
    }

    function createAndInitializePoolIfNecessary(address token0, address token1, uint24 fee, uint160 sqrtPriceX96) external payable override returns (address pool) {
        return address(0);
    }

    function positions(uint256) external view override returns (
        uint96, address, address, address, uint24, int24, int24, uint128, uint256, uint256, uint128, uint128
    ) {
        return (0, address(0), address(0), address(0), 0, 0, 0, 0, 0, 0, 0, 0);
    }

    function increaseLiquidity(IncreaseLiquidityParams calldata) external payable override returns (uint128, uint256, uint256) {
        return (0, 0, 0);
    }

    function decreaseLiquidity(DecreaseLiquidityParams calldata) external payable override returns (uint256, uint256) {
        return (0, 0);
    }

    function burn(uint256) external payable override {}

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public override(ERC721, IERC721) {
        super.safeTransferFrom(from, to, tokenId, data);
    }

    // Override ownerOf to satisfy both interfaces
    function ownerOf(uint256 tokenId) public view override(ERC721, IERC721) returns (address) {
        return super.ownerOf(tokenId);
    }

    // Override name to satisfy IERC721Metadata
    function name() public view override(ERC721, IERC721Metadata) returns (string memory) {
        return super.name();
    }

    // Override symbol to satisfy IERC721Metadata
    function symbol() public view override(ERC721, IERC721Metadata) returns (string memory) {
        return super.symbol();
    }

    // Override tokenURI to satisfy IERC721Metadata
    function tokenURI(uint256 tokenId) public pure override(ERC721, IERC721Metadata) returns (string memory) {
        return "";
    }

    // Mock IERC721Enumerable functions
    function totalSupply() external view override returns (uint256) {
        return tokenIdCounter;
    }

    function tokenOfOwnerByIndex(address, uint256) external pure override returns (uint256) {
        return 0;
    }

    function tokenByIndex(uint256) external pure override returns (uint256) {
        return 0;
    }

    // Mock IERC721Permit functions
    function DOMAIN_SEPARATOR() external view override returns (bytes32) {
        return bytes32(0);
    }

    function PERMIT_TYPEHASH() external pure override returns (bytes32) {
        return bytes32(0);
    }

    function nonces(uint256) external view returns (uint256) {
        return 0;
    }

    function permit(address spender, uint256 tokenId, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external payable override {}

    // Mock IPeripheryPayments functions
    function unwrapWETH9(uint256 amountMinimum, address recipient) external payable override {}
    function refundETH() external payable override {}
    function sweepToken(address token, uint256 amountMinimum, address recipient) external payable override {}
}