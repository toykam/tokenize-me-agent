// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ISwapRouter {
    struct   {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

    struct ExactInputParams {
        bytes path;
        address recipient;
        uint256 deadline;
        uint256 amountIn;
        uint256 amountOutMinimum;
    }

    function exactInputSingle(ExactInputSingleParams calldata params) external payable returns (uint256 amountOut);
    function exactInput(ExactInputParams calldata params) external payable returns (uint256 amountOut);
    function unwrapWETH9(uint256 amountMinimum, address recipient) external payable;
}

interface IERC20 {
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

interface IWETH {
    function deposit() external payable;
    function withdraw(uint256 wad) external;
}

contract TokenizedProfileDex {
    address public immutable swapRouter;
    address public immutable WETH;

    event SwapETHForTokens(
        address indexed user,
        address tokenOut,
        uint256 amountIn,
        uint256 amountOut
    );
    event SwapTokensForETH(
        address indexed user,
        address tokenIn,
        uint256 amountIn,
        uint256 amountOut
    );
    event SwapTokensForTokens(
        address indexed user,
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 amountOut
    );

    constructor(address _swapRouter, address _weth) {
        require(_swapRouter != address(0), "Invalid router address");
        require(_weth != address(0), "Invalid WETH address");
        swapRouter = _swapRouter;
        WETH = _weth;
    }

    function swapETHForTokens(
        address tokenOut,
        uint256 amountOutMin,
        uint256 deadline,
        uint24 fee,
        
    ) external payable returns (uint256 amountOut) {
        require(msg.value > 0, "Must send ETH");
        require(tokenOut != address(0), "Invalid token address");

        IWETH(WETH).deposit{value: msg.value}();
        IERC20(WETH).approve(swapRouter, msg.value);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: WETH,
            tokenOut: tokenOut,
            fee: fee,
            recipient: msg.sender,
            deadline: deadline,
            amountIn: msg.value,
            amountOutMinimum: amountOutMin,
            sqrtPriceLimitX96: 0
        });

        amountOut = ISwapRouter(swapRouter).exactInputSingle(params);
        emit SwapETHForTokens(msg.sender, tokenOut, msg.value, amountOut);
        return amountOut;
    }

    function swapTokensForETH(
        address tokenIn,
        uint256 amountIn,
        uint256 amountOutMin,
        uint256 deadline,
        uint24 fee
    ) external returns (uint256 amountOut) {
        require(amountIn > 0, "Must send tokens");
        require(tokenIn != address(0), "Invalid token address");

        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
        IERC20(tokenIn).approve(swapRouter, amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: tokenIn,
            tokenOut: WETH,
            fee: fee,
            recipient: address(this),
            deadline: deadline,
            amountIn: amountIn,
            amountOutMinimum: amountOutMin,
            sqrtPriceLimitX96: 0
        });

        amountOut = ISwapRouter(swapRouter).exactInputSingle(params);
        IWETH(WETH).withdraw(amountOut);
        (bool success, ) = msg.sender.call{value: amountOut}("");
        require(success, "Failed to send ETH");

        emit SwapTokensForETH(msg.sender, tokenIn, amountIn, amountOut);
        return amountOut;
    }

    function swapTokensForTokens(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 amountOutMin,
        uint256 deadline,
        uint24 fee
    ) external returns (uint256 amountOut) {
        require(amountIn > 0, "Must send tokens");
        require(tokenIn != address(0), "Invalid tokenIn address");
        require(tokenOut != address(0), "Invalid tokenOut address");

        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
        IERC20(tokenIn).approve(swapRouter, amountIn);

        // Construct the path: tokenIn -> WETH -> tokenOut
        bytes memory path = abi.encodePacked(
            tokenIn,
            uint24(fee),
            WETH,
            uint24(fee),
            tokenOut
        );

        ISwapRouter.ExactInputParams memory params = ISwapRouter.ExactInputParams({
            path: path,
            recipient: msg.sender,
            deadline: deadline,
            amountIn: amountIn,
            amountOutMinimum: amountOutMin
        });

        amountOut = ISwapRouter(swapRouter).exactInput(params);
        emit SwapTokensForTokens(msg.sender, tokenIn, tokenOut, amountIn, amountOut);
        return amountOut;
    }

    receive() external payable {}
}