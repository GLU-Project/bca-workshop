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

    it("Should have the correct initial value", async function () {
        const bread = await groceryShop.groceryItem(0)
        const egg = await groceryShop.groceryItem(1)
        const jam = await groceryShop.groceryItem(2)

        assert.equal(bread.numberOfItems, 2)
        assert.equal(egg.numberOfItems, 2)
        assert.equal(jam.numberOfItems, 2)
    })

    it("just Owner can add grocery", async function () {
        let [owner, other] = await ethers.getSigners()

        await expect(groceryShop.connect(other).add(0, 1)).to.be.reverted
        expect(groceryShop.add(0, 1)).to.be.ok
    })

    it("should add grocery > 0", async function () {
        await expect(groceryShop.add(0, 0)).to.be.reverted
    })

    it("should add grocery", async function () {
        const breadCount = await groceryShop.groceryItem(0)
        await groceryShop.add(0, 1)
        const newBreadCount = await groceryShop.groceryItem(0)

        assert.equal(
            newBreadCount.numberOfItems,
            breadCount.numberOfItems.toNumber() + 1
        )
    })

    it("should buy grocery > 0", async function () {
        await expect(groceryShop.buy(0, 0)).to.be.reverted
    })

    it("should buy enough grocery", async function () {
        await expect(groceryShop.buy(0, 5)).to.be.reverted
    })

    it("should have enough balance to buy grocery", async function () {
        let [owner, other] = await ethers.getSigners()
        let itemType = 0
        let itemPurchased = 2

        let item = await groceryShop.groceryItem(0)

        let expectedTotal = item.numberOfItems - itemPurchased
        let amount = ethers.utils.parseEther("0.02")

        await groceryShop
            .connect(other)
            .buy(itemType, itemPurchased, { value: amount })

        item = await groceryShop.groceryItem(itemType)

        expect(item.numberOfItems).to.equal(expectedTotal)
    })
})
