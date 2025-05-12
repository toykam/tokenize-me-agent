// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./SocialToken.sol";
import "./interface.sol";
import {TickMath} from "./lib/TickMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./TokenizedProfileMultiPositionLiquidityLocker.sol";

interface IWETH is IERC20 {
    function deposit() external payable;
    function withdraw(uint256) external;
}

contract TokenFactory is Ownable {
    address public devAddress;

    address public weth;
    IUniswapV3Factory public uniswapV3Factory;
    INonfungiblePositionManager public positionManager;
    TokenizedProfileMultiPositionLiquidityLocker public lpLocker;
    address public swapRouter;

    mapping(address => address) public userToToken;
    address[] public allTokens;

    event TokenDeployed(address indexed tokenAddress, address indexed owner, string name, string symbol, string handle, string platform, string profileUrl);
    event LiquidityAdded(address indexed tokenAddress, uint256 tokenId, uint256 amountToken, uint256 amountETH);
    event Debug(string message, uint256 value);
    event DebugIntValues(string name, int256 value);
    event DebugAddress(string name, address value);


    uint64 public defaultLockingPeriod = 31556952; // 1 day in seconds
    uint16 public lpFeesCut = 500; // 50% - LP fees cut
    uint8 public protocolCut = 0; // 0% - No protocol cut on deployment

    constructor(
        address _devAddress, 
        address _positionManager, 
        address _uniswapV3Factory, 
        address _weth, 
        address _swapRouter,
        address _lpLocker
    ) Ownable(msg.sender) {
        require(_devAddress != address(0), "Invalid dev address");
        require(_positionManager != address(0), "Invalid position manager address");
        require(_uniswapV3Factory != address(0), "Invalid factory address");
        require(_weth != address(0), "Invalid WETH address");
        devAddress = _devAddress;

        // liquidityLocker = IMultiPositionLiquidityLocker(_locker);
        uniswapV3Factory = IUniswapV3Factory(_uniswapV3Factory);
        positionManager = INonfungiblePositionManager(_positionManager);
        lpLocker = TokenizedProfileMultiPositionLiquidityLocker(_lpLocker);
        swapRouter = _swapRouter;
        weth = _weth;
    }

    // Add predictTokenAddress function
    function predictTokenAddress(
        address deployer,
        string calldata name,
        string calldata symbol,
        string calldata handle,
        string calldata platform,
        string calldata profileUrl,
        bytes32 salt
    ) public view returns (address) {
        bytes32 create2Salt = keccak256(abi.encode(deployer, salt));
        bytes memory bytecode = abi.encodePacked(
            type(SocialToken).creationCode,
            abi.encode(name, symbol, handle, platform, profileUrl)
        );
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                create2Salt,
                keccak256(bytecode)
            )
        );
        return address(uint160(uint256(hash)));
    }

    // Add generateSalt function
    function generateSalt(
        address deployer,
        string calldata name,
        string calldata symbol,
        string calldata handle,
        string calldata platform,
        string calldata profileUrl
    ) external view returns (bytes32 salt, address tokenAddress) {
        for (uint256 i = 0; i < 1000; i++) {
            salt = bytes32(i);
            tokenAddress = predictTokenAddress(deployer, name, symbol, handle, platform, profileUrl, salt);
            if (uint160(tokenAddress) < uint160(weth) && tokenAddress.code.length == 0) {
                return (salt, tokenAddress);
            }
        }
        revert("Could not find suitable salt");
    }

    // Helper function to encode initial price (1:1 for simplicity)
    function encodePriceSqrt(uint256 reserve1, uint256 reserve0) internal pure returns (uint160) {
        require(reserve0 > 0 && reserve1 > 0, "Invalid reserves");
        return uint160(sqrt((reserve1 * 2**192) / reserve0));
    }

    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function maxUsableTick(int24 tickSpacing) internal pure returns (int24) {
        unchecked {
            return (TickMath.MAX_TICK / tickSpacing) * tickSpacing;
        }
    }
    
    function deployToken(
        string memory name,
        string memory symbol,
        address tokenOwner,
        address profileAddress,
        string memory handle,
        string memory platform,
        string memory profileUrl,
        int24 _initialTick,
        uint24 _fee,
        bytes32 salt // Added salt parameter
    ) external payable onlyOwner returns (address) {
        emit Debug("Checking requirements", msg.value);
        require(userToToken[profileAddress] == address(0), "Token already exists for this user");
        require(profileAddress != address(0), "Invalid token owner");

        emit Debug("Deploying SocialToken with CREATE2", 0);
        
        // Compute CREATE2 salt
        bytes32 create2Salt = keccak256(abi.encode(msg.sender, salt));
        
        // Prepare bytecode with constructor arguments
        bytes memory bytecode = abi.encodePacked(
            type(SocialToken).creationCode,
            abi.encode(name, symbol, handle, platform, profileUrl)
        );
        
        // Compute deterministic address
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                create2Salt,
                keccak256(bytecode)
            )
        );
        address tokenAddress = address(uint160(uint256(hash)));
        
        // Ensure tokenAddress < weth
        require(uint160(tokenAddress) < uint160(weth), "Token address must be less than WETH address");
        
        // Deploy with CREATE2
        assembly {
            tokenAddress := create2(0, add(bytecode, 32), mload(bytecode), create2Salt)
        }
        require(tokenAddress != address(0), "Token deployment failed");
        
        emit DebugAddress("Token Address", tokenAddress);
        
        SocialToken newToken = SocialToken(tokenAddress);
        
        userToToken[profileAddress] = address(newToken);
        allTokens.push(address(newToken));

        // Get the total supply - We'll use ALL tokens for liquidity
        uint256 tokenAmount = IERC20(address(newToken)).balanceOf(address(this));
        emit Debug("Initial token balance", tokenAmount);
        
        // Approve tokens for position manager
        emit Debug("Approving tokens for NonfungiblePositionManager", tokenAmount);
        require(IERC20(address(newToken)).approve(address(positionManager), tokenAmount), "Approval failed");

        // Handle WETH wrapping for pool creation
        IWETH(weth).deposit{value: msg.value}();
        require(IWETH(weth).approve(address(positionManager), msg.value), "WETH approval failed");


        // Use full price range to ensure all tokens can be used
        int24 tickSpacing = uniswapV3Factory.feeAmountTickSpacing(_fee);  // Spacing for 1% fee tier
        emit DebugIntValues("TickSpacing", int256(tickSpacing));
        int24 minTick = _initialTick;  // Minimum possible tick
        int24 maxTick = maxUsableTick(tickSpacing);   // Maximum possible tick

        emit DebugIntValues("MinTickSpacing", int256(minTick));
        emit DebugIntValues("MaxTickSpacing", int256(maxTick));


        uint160 sqrtPriceX96 = TickMath.getSqrtRatioAtTick(minTick);
        emit Debug("sqrtPriceX96", sqrtPriceX96);

        address pool;
        
        emit Debug("Creating new pool", 0);
        try uniswapV3Factory.createPool(address(newToken), weth, _fee) returns (address newPool) {
            pool = newPool;
            // Initialize pool with price of 1 ETH = 1,000,000 tokens (since we have 1B total supply)
            // IUniswapV3Pool(pool).initialize(sqrtPriceX96);
            emit Debug("Pool created and initialized", 0);
        } catch Error(string memory reason) {
            IWETH(weth).withdraw(msg.value); // Withdraw WETH back to ETH
            emit Debug("Pool creation failed", 0);
            revert(string(abi.encodePacked("Pool creation failed: ", reason)));
        }

        // Initialize pool
        emit Debug("Initializing pool ", 0);
        try IUniswapV3Pool(pool).initialize(sqrtPriceX96) {
            emit Debug("Pool initialized", 0);
        } catch Error(string memory reason) {
            emit Debug(string(abi.encodePacked("Pool initialization failed: ", reason)), 0);
            revert(string(abi.encodePacked("Pool initialization failed: ", reason)));
        } catch {
            emit Debug("Pool initialization failed with unknown error", 0);
            revert("Pool initialization failed with unknown error");
        }

        emit Debug("Minting liquidity position", msg.value);


        INonfungiblePositionManager.MintParams memory params = INonfungiblePositionManager.MintParams({
            token0: address(newToken),
            token1: weth,
            fee: _fee,
            tickLower: minTick,
            tickUpper: maxTick,
            amount0Desired: tokenAmount,
            amount1Desired: 0,
            amount0Min: 0,
            amount1Min: 0,
            recipient: address(this),
            deadline: block.timestamp + 300
        });

        emit Debug("Minting position with token amount", tokenAmount);
        uint256 tokenId;
        uint128 liquidity;
        uint256 amount0;
        uint256 amount1;
        // (tokenId, liquidity, amount0, amount1) = positionManager.mint{value: msg.value}(params);


        try positionManager.mint(params) returns (uint256 _tokenId, uint128 _liquidity, uint256 _amount0, uint256 _amount1) {
            tokenId = _tokenId;
            liquidity = _liquidity;
            amount0 = _amount0;
            amount1 = _amount1;
        } catch Error(string memory reason) {
            emit Debug(string(abi.encodePacked("Position minting failed: ", reason)), 0);
            revert(string(abi.encodePacked("Position minting failed: ", reason)));
        } catch {
            emit Debug("Position minting failed with unknown error", 0);
            revert("Position minting failed with unknown error");
        }

        // this should be transferred to the token
        emit Debug("Transferring NFT to LP locker", 0);
        positionManager.safeTransferFrom(address(this), address(lpLocker), tokenId);
        
        // Set position ID in token contract
        emit LiquidityAdded(address(newToken), tokenId, amount0, amount1);

        // Check if all tokens were used
        uint256 remainingTokens = IERC20(address(newToken)).balanceOf(address(this));
        emit Debug("Remaining tokens after LP", remainingTokens);
        
        // If any tokens remain, create another position to use them all
        // if (remainingTokens > 0) {
        //     emit Debug("Creating additional position for remaining tokens", remainingTokens);
        //     require(IERC20(address(newToken)).approve(address(positionManager), remainingTokens), "Second approval failed");
            
        //     params.amount0Desired = remainingTokens;
        //     params.amount1Desired = imsg.value;
            
        //     (tokenId, liquidity, amount0, amount1) = positionManager.mint{value: 0}(params);
        //     emit Debug("Additional liquidity added", liquidity);
            
        //     // Update position ID to the latest one
        //     newToken.setPositionTokenId(tokenId);
        //     emit LiquidityAdded(address(newToken), tokenId, amount0, amount1);
        // }

        // Transfer token ownership to the owner
        // newToken.transferOwnership(tokenOwner);
        // Initialize the position in the locker
        emit Debug("Initializing position in locker", 0);
        lpLocker.initializePosition(
            tokenId,
            profileAddress,
            uint64(block.timestamp + defaultLockingPeriod),
            lpFeesCut
        );
        emit TokenDeployed(address(tokenAddress), tokenOwner, name, symbol, handle, platform, profileUrl);


        // Handle ETH swap if sent
        uint256 remainingFundsToBuyTokens = msg.value;
        emit Debug("Remaining funds for tokens", remainingFundsToBuyTokens);

        if (remainingFundsToBuyTokens > 0) {
            emit Debug("Executing token swap", 0);
            ExactInputSingleParams memory swapParams = ExactInputSingleParams({
                tokenIn: weth,
                tokenOut: address(newToken),
                fee: _fee,
                recipient: msg.sender,
                amountIn: remainingFundsToBuyTokens,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

            try ISwapRouter(swapRouter).exactInputSingle{
                value: remainingFundsToBuyTokens
            }(swapParams) returns (uint256 amountOut) {
                emit Debug("Swap amount out", amountOut);
            } catch Error(string memory reason) {
                emit Debug(string(abi.encodePacked("Swap failed: ", reason)), 0);
                // Continue execution even if swap fails
            } catch {
                emit Debug("Swap failed with unknown error", 0);
                // Continue execution even if swap fails
            }
        }


        return address(newToken);
    }

    function getAllTokens() external view returns (address[] memory) {
        return allTokens;
    }

    receive() external payable {}

    function withdrawETH() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        payable(owner()).transfer(balance);
    }




}