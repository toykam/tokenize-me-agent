// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./interface.sol";

/**
 * @title ProfileTokenizationLPLocker
 * @dev toykam
 */

/**
 * @title MultiPositionLiquidityLocker
 * @notice A gas-efficient implementation that manages multiple LP positions
 */
contract TokenizedProfileMultiPositionLiquidityLocker is Ownable, IERC721Receiver {
    // Position information
    struct PositionInfo {
        address owner;
        uint64 unlockTime;
        uint16 lpFeesCut; // Changed from uint8 to uint16
        bool initialized;
    }

    // Address of the Uniswap V3 position manager
    address public positionManager;
    
    // Default settings
    uint16 public defaultLpFeesCut = 500; // Changed from uint8 to uint16: 500 / 1000 -> 50%
    uint64 public defaultLockingPeriod = 31536000; // Default unlock period
    
    // Protocol fee recipient
    address public feeCollector;
    
    // Protocol address that can trigger fee collection and withdrawals
    address public constant PROTOCOL_ADDRESS = 0xEAf75B465F791b24C3B3E17a2F4793A67e3941fD;
    
    // Mapping from tokenId to position info
    mapping(uint256 => PositionInfo) public positions;
    
    // Mapping from user address to their token IDs
    mapping(address => uint256[]) public userTokenIds;
    
    // All token IDs in the system
    uint256[] public allTokenIds;
    
    // Events
    event PositionLocked(address indexed owner, uint256 indexed tokenId, uint64 unlockTime);
    event FeesCollected(uint256 indexed tokenId, address token0, address token1, uint256 amount0, uint256 amount1);
    event BatchFeesCollected(address indexed owner, uint256 count, uint256 totalAmount0, uint256 totalAmount1);
    event ProtocolBatchFeesCollected(uint256 count, uint256 totalAmount0, uint256 totalAmount1);
    event PositionWithdrawn(address indexed owner, uint256 indexed tokenId, address indexed recipient);
    event Received(address indexed from, uint256 tokenId);
    
    // Modifier to restrict protocol-only functions
    modifier onlyProtocol() {
        require(msg.sender == PROTOCOL_ADDRESS, "Only protocol can call");
        _;
    }
    
    constructor(address _positionManager, address _feeCollector) Ownable(msg.sender) {
        positionManager = _positionManager;
        feeCollector = _feeCollector;
    }
    
    /**
     * @notice Initialize a new position in the locker
     * @param tokenId The NFT token ID to lock
     * @param owner The owner of the position
     * @param unlockTime The timestamp when the position can be withdrawn
     * @param lpFeesCut The percentage of fees to take (in thousandths)
     */
    function initializePosition(
        uint256 tokenId,
        address owner,
        uint64 unlockTime,
        uint16 lpFeesCut // Changed from uint8 to uint16
    ) external {
        require(!positions[tokenId].initialized, "Already initialized");
        
        positions[tokenId] = PositionInfo({
            owner: owner,
            unlockTime: unlockTime,
            lpFeesCut: lpFeesCut,
            initialized: true
        });
        
        userTokenIds[owner].push(tokenId);
        allTokenIds.push(tokenId);
        
        emit PositionLocked(owner, tokenId, unlockTime);
    }
    
    /**
     * @notice Collect fees for a given position
     * @param tokenId The NFT token ID
     */
    function collectFees(uint256 tokenId) public returns (uint256 amount0, uint256 amount1) {
        PositionInfo memory position = positions[tokenId];
        require(position.initialized, "Position not initialized");
        
        // Allow either the position owner or the protocol address to collect fees
        if (msg.sender != PROTOCOL_ADDRESS) {
            require(msg.sender == position.owner, "Not position owner");
        }
        
        INonfungiblePositionManager manager = INonfungiblePositionManager(positionManager);
        
        // Collect all available fees
        (amount0, amount1) = manager.collect(
            INonfungiblePositionManager.CollectParams({
                tokenId: tokenId,
                recipient: address(this),
                amount0Max: type(uint128).max,
                amount1Max: type(uint128).max
            })
        );
        
        if (amount0 == 0 && amount1 == 0) {
            return (0, 0);
        }
        
        // Get token addresses from the position
        (
            ,
            ,
            address token0,
            address token1,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
        ) = manager.positions(tokenId);
        
        // Calculate owner's share
        uint256 ownerAmount0 = amount0 * (1000 - position.lpFeesCut) / 1000;
        uint256 ownerAmount1 = amount1 * (1000 - position.lpFeesCut) / 1000;
        
        // Calculate protocol fee
        uint256 protocolAmount0 = amount0 - ownerAmount0;
        uint256 protocolAmount1 = amount1 - ownerAmount1;
        
        // Transfer owner's share
        if (ownerAmount0 > 0) {
            IERC20(token0).transfer(position.owner, ownerAmount0);
        }
        
        if (ownerAmount1 > 0) {
            IERC20(token1).transfer(position.owner, ownerAmount1);
        }
        
        // Transfer protocol fees
        if (protocolAmount0 > 0) {
            IERC20(token0).transfer(feeCollector, protocolAmount0);
        }
        
        if (protocolAmount1 > 0) {
            IERC20(token1).transfer(feeCollector, protocolAmount1);
        }
        
        emit FeesCollected(tokenId, token0, token1, amount0, amount1);
        
        return (amount0, amount1);
    }
    
    /**
     * @notice Collect fees for all positions owned by the caller
     * @return positionsCount Number of positions processed
     * @return totalAmount0 Total amount of token0 collected
     * @return totalAmount1 Total amount of token1 collected
     */
    function collectAllFees() external returns (uint256 positionsCount, uint256 totalAmount0, uint256 totalAmount1) {
        uint256[] memory tokenIds = userTokenIds[msg.sender];
        positionsCount = tokenIds.length;
        
        for (uint256 i = 0; i < positionsCount; i++) {
            // Check if caller is still the owner (safeguard)
            if (positions[tokenIds[i]].owner == msg.sender && positions[tokenIds[i]].initialized) {
                (uint256 amount0, uint256 amount1) = collectFees(tokenIds[i]);
                totalAmount0 += amount0;
                totalAmount1 += amount1;
            }
        }
        
        emit BatchFeesCollected(msg.sender, positionsCount, totalAmount0, totalAmount1);
        
        return (positionsCount, totalAmount0, totalAmount1);
    }
    
    /**
     * @notice Collect fees for specific positions owned by the caller
     * @param tokenIds Array of token IDs to collect fees from
     * @return processedCount Number of positions processed
     * @return totalAmount0 Total amount of token0 collected
     * @return totalAmount1 Total amount of token1 collected  
     */
    function collectSelectedFees(uint256[] calldata tokenIds) external returns (uint256 processedCount, uint256 totalAmount0, uint256 totalAmount1) {
        processedCount = tokenIds.length;
        
        for (uint256 i = 0; i < processedCount; i++) {
            // Check if caller is the owner
            if (positions[tokenIds[i]].owner == msg.sender && positions[tokenIds[i]].initialized) {
                (uint256 amount0, uint256 amount1) = collectFees(tokenIds[i]);
                totalAmount0 += amount0;
                totalAmount1 += amount1;
            }
        }
        
        emit BatchFeesCollected(msg.sender, processedCount, totalAmount0, totalAmount1);
        
        return (processedCount, totalAmount0, totalAmount1);
    }
    
    /**
     * @notice Protocol function to collect fees from all positions
     * @return processedCount Number of positions processed
     * @return totalAmount0 Total amount of token0 collected
     * @return totalAmount1 Total amount of token1 collected
     */
    function protocolCollectAllFees() external onlyProtocol returns (uint256 processedCount, uint256 totalAmount0, uint256 totalAmount1) {
        processedCount = allTokenIds.length;
        
        for (uint256 i = 0; i < processedCount; i++) {
            uint256 tokenId = allTokenIds[i];
            if (positions[tokenId].initialized) {
                (uint256 amount0, uint256 amount1) = collectFees(tokenId);
                totalAmount0 += amount0;
                totalAmount1 += amount1;
            }
        }
        
        emit ProtocolBatchFeesCollected(processedCount, totalAmount0, totalAmount1);
        
        return (processedCount, totalAmount0, totalAmount1);
    }
    
    /**
     * @notice Protocol function to collect fees from positions in batches
     * @param startIndex The starting index in the allTokenIds array
     * @param count The number of positions to process
     * @return processedCount Number of positions processed
     * @return totalAmount0 Total amount of token0 collected
     * @return totalAmount1 Total amount of token1 collected
     */
    function protocolCollectFeesBatch(uint256 startIndex, uint256 count) 
        external 
        onlyProtocol 
        returns (uint256 processedCount, uint256 totalAmount0, uint256 totalAmount1) 
    {
        uint256 endIndex = startIndex + count;
        uint256 arrayLength = allTokenIds.length;
        
        // Make sure we don't go out of bounds
        if (endIndex > arrayLength) {
            endIndex = arrayLength;
        }
        
        processedCount = endIndex - startIndex;
        
        for (uint256 i = startIndex; i < endIndex; i++) {
            uint256 tokenId = allTokenIds[i];
            if (positions[tokenId].initialized) {
                (uint256 amount0, uint256 amount1) = collectFees(tokenId);
                totalAmount0 += amount0;
                totalAmount1 += amount1;
            }
        }
        
        emit ProtocolBatchFeesCollected(processedCount, totalAmount0, totalAmount1);
        
        return (processedCount, totalAmount0, totalAmount1);
    }
    
    /**
     * @notice Withdraw a position - MODIFIED: Can only be called by the protocol address but still respects timelock
     * @param tokenId The NFT token ID to withdraw
     * @param recipient The address to receive the NFT
     */
    function withdraw(uint256 tokenId, address recipient) external onlyProtocol {
        PositionInfo memory position = positions[tokenId];
        require(position.initialized, "Position not initialized");
        require(recipient != address(0), "Invalid recipient");
        require(block.timestamp >= position.unlockTime, "Still locked");
        
        // Remove from initialized positions
        delete positions[tokenId];
        
        // Transfer the NFT to the specified recipient
        INonfungiblePositionManager(positionManager).safeTransferFrom(
            address(this),
            recipient,
            tokenId
        );
        
        emit PositionWithdrawn(position.owner, tokenId, recipient);
    }
    
    /**
     * @notice Get all token IDs for a user
     * @param user The user address
     */
    function getPositionsForUser(address user) external view returns (uint256[] memory) {
        return userTokenIds[user];
    }
    
    /**
     * @notice Get all token IDs in the system
     */
    function getAllPositions() external view returns (uint256[] memory) {
        return allTokenIds;
    }
    
    /**
     * @notice Check if a user owns a specific position
     * @param user The user address
     * @param tokenId The NFT token ID
     */
    function isPositionOwner(address user, uint256 tokenId) external view returns (bool) {
        return positions[tokenId].owner == user;
    }
    
    /**
     * @notice Update protocol fee collector
     * @param _feeCollector New fee collector address
     */
    function updateFeeCollector(address _feeCollector) external onlyOwner {
        feeCollector = _feeCollector;
    }
    
    /**
     * @notice Update default locking period
     * @param _defaultLockingPeriod New default locking period
     */
    function updateDefaultLockingPeriod(uint64 _defaultLockingPeriod) external onlyOwner {
        defaultLockingPeriod = _defaultLockingPeriod;
    }
    
    /**
     * @notice Update default LP fees cut
     * @param _defaultLpFeesCut New default LP fees cut
     */
    function updateDefaultLpFeesCut(uint16 _defaultLpFeesCut) external onlyOwner { // Changed from uint8 to uint16
        defaultLpFeesCut = _defaultLpFeesCut;
    }
    
    /**
     * @notice Allows for receiving NFTs
     */
    function onERC721Received(
        address,
        address from,
        uint256 id,
        bytes calldata
    ) external override returns (bytes4) {
        emit Received(from, id);
        return IERC721Receiver.onERC721Received.selector;
    }
}