// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {TickMath} from "./lib/TickMath.sol";
import {INonfungiblePositionManager, IUniswapV3Factory, IMultiPositionLiquidityLocker, ExactInputSingleParams, ISwapRouter, IUniswapV3Pool} from "./interface.sol";

/**
 * @title TokenizedProfileLauncher
 * @dev BBB Version2
 */

// Define the Token contract directly here to avoid import issues
contract Token is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 maxSupply_,
        address recipient_
    ) ERC20(name_, symbol_) {
        _mint(recipient_, maxSupply_);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}

interface IToken {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
}

/**
 * @title TokenizedProfile
 * @dev Main contract for TokenizedProfile platform managing token deployment and liquidity provisioning
 */
contract TokenizedProfileLauncher is Ownable {
    using TickMath for int24;

    // State variables and events...
    address public taxCollector;
    uint64 public defaultLockingPeriod = 31556952; // 1 day in seconds
    uint16 public lpFeesCut = 500; // 50% - LP fees cut
    uint8 public protocolCut = 0; // 0% - No protocol cut on deployment
    IMultiPositionLiquidityLocker public liquidityLocker;

    address public weth;
    IUniswapV3Factory public uniswapV3Factory;
    INonfungiblePositionManager public positionManager;
    address public swapRouter;

    event TokenCreated(
        address tokenAddress,
        uint256 lpNftId,
        address deployer,
        string name,
        string symbol,
        uint256 supply,
        address recipient,
        uint256 recipientAmount
    );

    // Debug events
    event DebugStep(string step);
    event DebugValues(string name, uint256 value);
    event DebugAddress(string name, address addr);
    event DebugIntValues(string name, int256 value);

    constructor(
        address taxCollector_,
        address weth_,
        address locker_,
        address uniswapV3Factory_,
        address positionManager_,
        address swapRouter_
    ) Ownable(msg.sender) {
        taxCollector = taxCollector_;
        weth = weth_;
        liquidityLocker = IMultiPositionLiquidityLocker(locker_);
        uniswapV3Factory = IUniswapV3Factory(uniswapV3Factory_);
        positionManager = INonfungiblePositionManager(positionManager_);
        swapRouter = swapRouter_;
    }

    /**
     * @notice Creates a new token and deploys liquidity
     * This function creates a token that's completely separate from KOA
     */
    function deployToken(
        string calldata _name,
        string calldata _symbol,
        uint256 _supply,
        int24 _initialTick,
        uint24 _fee,
        bytes32 _salt,
        address _deployer,
        address _recipient,
        uint256 _recipientAmount
    ) external payable returns (address tokenAddress, uint256 tokenId) {
        emit DebugStep("Starting deployToken");
        
        int24 tickSpacing = uniswapV3Factory.feeAmountTickSpacing(_fee);
        emit DebugIntValues("tickSpacing", int256(tickSpacing));
        emit DebugIntValues("initialTick", int256(_initialTick));

        require(
            tickSpacing != 0 && _initialTick % tickSpacing == 0,
            "Invalid tick or tick spacing"
        );
        emit DebugStep("Tick validation passed");

        // Validate recipient amount
        require(_recipientAmount <= _supply, "Recipient amount exceeds supply");
        uint256 lpAmount = _supply - _recipientAmount;
        emit DebugValues("Recipient amount", _recipientAmount);
        emit DebugValues("LP amount", lpAmount);

        // Create a new token contract using CREATE2 for deterministic address
        bytes32 create2Salt = keccak256(abi.encode(msg.sender, _salt));
        
        // We deploy the Token with this contract as the initial recipient
        bytes memory bytecode = abi.encodePacked(
            type(Token).creationCode,
            abi.encode(_name, _symbol, _supply, address(this))
        );
        
        // Deploy the token with CREATE2
        bytes32 hash = keccak256(
            abi.encodePacked(
                bytes1(0xff),
                address(this),
                create2Salt,
                keccak256(bytecode)
            )
        );
        
        // Predict the address
        tokenAddress = address(uint160(uint256(hash)));
        
        // Verify it's less than WETH
        require(uint160(tokenAddress) < uint160(weth), "Token address must be less than WETH address");
        
        // Deploy the token
        // ex
        assembly {
            tokenAddress := create2(0, add(bytecode, 32), mload(bytecode), create2Salt)
        }
        
        require(tokenAddress != address(0), "Token deployment failed");
        emit DebugAddress("Token deployed at", tokenAddress);

        // Transfer tokens to recipient if needed
        IToken token = IToken(tokenAddress);
        if (_recipientAmount > 0 && _recipient != address(0)) {
            emit DebugStep("Transferring recipient allocation");
            require(token.transfer(_recipient, _recipientAmount), "Token transfer failed");
            emit DebugAddress("Recipient", _recipient);
            emit DebugValues("Amount transferred", _recipientAmount);
        }

        uint160 sqrtPriceX96 = _initialTick.getSqrtRatioAtTick();
        emit DebugValues("sqrtPriceX96", sqrtPriceX96);
        
        // Create pool
        emit DebugStep("Creating pool");
        address pool;
        try uniswapV3Factory.createPool(tokenAddress, weth, _fee) returns (address _pool) {
            pool = _pool;
            emit DebugAddress("Pool created at", pool);
        } catch Error(string memory reason) {
            emit DebugStep(string(abi.encodePacked("Pool creation failed: ", reason)));
            revert(string(abi.encodePacked("Pool creation failed: ", reason)));
        } catch {
            emit DebugStep("Pool creation failed with unknown error");
            revert("Pool creation failed with unknown error");
        }
        
        // Initialize pool
        emit DebugStep("Initializing pool");
        try IUniswapV3Pool(pool).initialize(sqrtPriceX96) {
            emit DebugStep("Pool initialized");
        } catch Error(string memory reason) {
            emit DebugStep(string(abi.encodePacked("Pool initialization failed: ", reason)));
            revert(string(abi.encodePacked("Pool initialization failed: ", reason)));
        } catch {
            emit DebugStep("Pool initialization failed with unknown error");
            revert("Pool initialization failed with unknown error");
        }

        // Create position with LP amount
        INonfungiblePositionManager.MintParams
            memory params = INonfungiblePositionManager.MintParams(
                tokenAddress,
                weth,
                _fee,
                _initialTick,
                maxUsableTick(tickSpacing),
                lpAmount,
                0,
                0,
                0,
                address(this),
                block.timestamp
            );

        // Approve tokens for position manager
        require(token.approve(address(positionManager), lpAmount), "Token approval failed");
        emit DebugStep("Token approved for position manager");
        
        try positionManager.mint(params) returns (uint256 _tokenId, uint128 liquidity, uint256 amount0, uint256 amount1) {
            tokenId = _tokenId;
            emit DebugStep("Position minted");
            emit DebugValues("Liquidity", uint256(liquidity));
            emit DebugValues("Amount0", amount0);
            emit DebugValues("Amount1", amount1);
        } catch Error(string memory reason) {
            emit DebugStep(string(abi.encodePacked("Position minting failed: ", reason)));
            revert(string(abi.encodePacked("Position minting failed: ", reason)));
        } catch {
            emit DebugStep("Position minting failed with unknown error");
            revert("Position minting failed with unknown error");
        }

        // Transfer the LP NFT to the locker
        emit DebugStep("Transferring NFT to locker");
        positionManager.safeTransferFrom(address(this), address(liquidityLocker), tokenId);
        
        // Initialize the position in the locker
        emit DebugStep("Initializing position in locker");
        liquidityLocker.initializePosition(
            tokenId,
            _deployer,
            uint64(block.timestamp + defaultLockingPeriod),
            lpFeesCut
        );

        // Handle ETH swap if sent
        uint256 remainingFundsToBuyTokens = msg.value;
        emit DebugValues("Remaining funds for tokens", remainingFundsToBuyTokens);

        if (remainingFundsToBuyTokens > 0) {
            emit DebugStep("Executing token swap");
            ExactInputSingleParams memory swapParams = ExactInputSingleParams({
                tokenIn: weth,
                tokenOut: tokenAddress,
                fee: _fee,
                recipient: msg.sender,
                amountIn: remainingFundsToBuyTokens,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

            try ISwapRouter(swapRouter).exactInputSingle{
                value: remainingFundsToBuyTokens
            }(swapParams) returns (uint256 amountOut) {
                emit DebugValues("Swap amount out", amountOut);
            } catch Error(string memory reason) {
                emit DebugStep(string(abi.encodePacked("Swap failed: ", reason)));
                // Continue execution even if swap fails
            } catch {
                emit DebugStep("Swap failed with unknown error");
                // Continue execution even if swap fails
            }
        }

        emit TokenCreated(
            tokenAddress,
            tokenId,
            msg.sender,
            _name,
            _symbol,
            _supply,
            _recipient,
            _recipientAmount
        );
    }

    // Other KOA functions...
    function initialSwapTokens(address token, uint24 _fee) public payable {
        require(msg.value > 0, "Must send ETH");
        
        ExactInputSingleParams memory swapParams = ExactInputSingleParams({
            tokenIn: weth,
            tokenOut: token,
            fee: _fee,
            recipient: msg.sender,
            amountIn: msg.value,
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0
        });

        ISwapRouter(swapRouter).exactInputSingle{value: msg.value}(swapParams);
    }

    function updateLiquidityLocker(address newLocker) external onlyOwner {
        liquidityLocker = IMultiPositionLiquidityLocker(newLocker);
    }
    
    // Helper function for ticks
    function maxUsableTick(int24 tickSpacing) internal pure returns (int24) {
        unchecked {
            return (TickMath.MAX_TICK / tickSpacing) * tickSpacing;
        }
    }
    
    // Function to predict token address before deployment
    function predictTokenAddress(
        address deployer,
        string calldata name,
        string calldata symbol,
        uint256 supply,
        bytes32 salt
    ) public view returns (address) {
        bytes32 create2Salt = keccak256(abi.encode(deployer, salt));
        
        bytes memory bytecode = abi.encodePacked(
            type(Token).creationCode,
            abi.encode(name, symbol, supply, address(this))
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
    
    // Function to find a valid salt for token creation
    function generateSalt(
        address deployer,
        string calldata name,
        string calldata symbol,
        uint256 supply
    ) external view returns (bytes32 salt, address token) {
        for (uint256 i; i < 1000; i++) {
            salt = bytes32(i);
            token = predictTokenAddress(deployer, name, symbol, supply, salt);
            
            if (uint160(token) < uint160(weth) && token.code.length == 0) {
                return (salt, token);
            }
        }
        revert("Could not find suitable salt");
    }

    // function computePoolAddress(
    //     address tokenA,
    //     address tokenB,
    //     uint24 fee
    // ) public view returns (address pool) {
    //     assembly ("memory-safe") {
    //         let ptr := mload(0x40)
    //         mstore(ptr, salt)
    //         mstore(add(ptr, 0x20), init_code_hash)
    //         pool := create2(0, 0, 0, keccak256(ptr, 64))
    //     }
    // }
}