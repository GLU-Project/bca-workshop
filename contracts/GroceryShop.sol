// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract GroceryShop {
    event Added(GroceryType groceryType, uint256 numberAdded);
    event Bought(
        uint256 purchaseId,
        GroceryType groceryType,
        uint256 numberOfUnitBought
    );

    enum GroceryType {
        Bread,
        Egg,
        Jam
    }

    struct Grocery {
        string name;
        uint256 numberOfItems;
    }

    struct PurchaseDetail {
        address buyerAddress;
        GroceryType itemType;
        uint256 numberOfUnitBought;
    }

    constructor(uint256 _breadCount, uint256 _eggCount, uint256 _jamCount) {}

    modifier onlyOwner() {
        _;
    }

    function add(GroceryType _groceryType, uint256 _numberAdded) public {}

    function buy(
        GroceryType _groceryType,
        uint256 _numberToBought
    ) public payable {}

    function withdraw() public {}

    function cashRegister(
        uint256 _purchaseId
    ) public view returns (address, GroceryType, uint256) {}
}
