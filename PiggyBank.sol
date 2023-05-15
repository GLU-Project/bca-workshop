// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract PiggyBank {
    address child;
    address owner;
    uint maxWithdrawAmount;

    constructor(address _child, uint _maxWithdrawAmount) {
        owner = msg.sender;
        child = _child;
        maxWithdrawAmount = _maxWithdrawAmount;
    }

    modifier isChild() {
        require(msg.sender == child, "Only the child can withdraw");
        _;
    }

    function deposit() public payable {}

    function withdraw(uint amount) public isChild {
        require(
            amount <= maxWithdrawAmount,
            "Withdraw amount greater than balance"
        );
        require(amount <= address(this).balance, "Amount greater than balance");
        bool success = payable(msg.sender).send(amount);
        require(success, "Failed to send Ether");
    }
}
