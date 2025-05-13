// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface.sol";

// SocialToken represents a tokenized social media profile with Uniswap V3 LP fee distribution on Base
contract SocialToken is ERC20 {

    // Struct to store social profile metadata
    struct SocialProfile {
        string handle;      // Social media handle (e.g., "@username")
        string platform;    // Platform (e.g., "Twitter", "Instagram")
        string profileUrl;  // URL to the social profile
    }

    SocialProfile public socialProfile;

    // Events
    event SocialProfileSet(string handle, string platform, string profileUrl);
    event Debug(string message, uint256 value);

    constructor(
        string memory name,
        string memory symbol,
        string memory _handle,
        string memory _platform,
        string memory _profileUrl
    ) ERC20(name, symbol) {
        uint256 initialSupply = 1_000_000_000 * 10 ** decimals(); // 1 billion tokens
        _mint(msg.sender, initialSupply);
        emit Debug("Minted initial supply", initialSupply);
        socialProfile = SocialProfile(_handle, _platform, _profileUrl);
        emit SocialProfileSet(_handle, _platform, _profileUrl);
    }

    // Get social profile details
    function getSocialProfile() external view returns (string memory handle, string memory platform, string memory profileUrl) {
        return (socialProfile.handle, socialProfile.platform, socialProfile.profileUrl);
    }

}