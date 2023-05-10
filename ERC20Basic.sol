// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract ERC20Basic is IERC20 {
    constructor(
        uint256 initialSupply
    ) public ERC20("ERC20Basic", "ERC20Basic") {
        _mint(msg.sender, initialSupply);
    }
}
