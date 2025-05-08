// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockWETH is ERC20 {
    constructor() ERC20("Wrapped Ether", "WETH") {
        _mint(msg.sender, 1000 ether); // Mint initial supply for testing
    }

    function deposit() external payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _burn(msg.sender, amount);
        (bool sent, ) = msg.sender.call{value: amount}("");
        require(sent, "Failed to send ETH");
    }

    receive() external payable {
        _mint(msg.sender, msg.value);
    }
}