//imports
import "@nomiclabs/hardhat-etherscan"
import { assert, expect } from "chai"

const { ethers } = require("hardhat")

describe("GroceryShop", function () {
    let groceryShopFactory: any
    let groceryShop: any

    beforeEach(async function () {
        groceryShopFactory = await ethers.getContractFactory("GroceryShop")
        groceryShop = await groceryShopFactory.deploy(2, 2, 2)
        await groceryShop.deployed()
    })

    it("deploy success", async function () {
        assert.isOk(groceryShop.address)
    })

    it("Should have the correct initial value", async function () {})

    it("just Owner can add grocery", async function () {})

    it("should add grocery > 0", async function () {})

    it("should add grocery", async function () {})

    it("should buy grocery > 0", async function () {})

    it("should buy enough grocery", async function () {})

    it("should have enough balance to buy grocery", async function () {})
})
