//imports
import "@nomiclabs/hardhat-etherscan"
import { network } from "hardhat"

const { ethers, run } = require("hardhat")

//async main
async function main() {
    const GroceryShopFactory = await ethers.getContractFactory("GroceryShop")

    console.log("Deploying contract...")
    const groceryShop = await GroceryShopFactory.deploy(3, 3, 3)
    await groceryShop.deployed()

    console.log(`Deployed contract to: ${groceryShop.address}`)

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        //Goerli Network
        console.log("Waiting for block txes...")
        await groceryShop.deployTransaction.wait(6)
        await verify(groceryShop.address, [3, 3, 3])
    }
}

async function verify(contractAddress: any, args: any) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
