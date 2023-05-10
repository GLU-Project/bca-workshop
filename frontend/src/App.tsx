import { Button, Grid } from "@mui/material"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import "./App.css"
import ItemCard from "./components/ItemCard"

import { GroceryShop, GroceryShop__factory } from "./typechain-types"

function App() {
    const [provider, setProvider] = useState<
        ethers.providers.Web3Provider | undefined
    >()
    const [groceryShop, setGroceryShop] = useState<GroceryShop | undefined>()
    const [balanceInEther, setBalanceInEther] = useState<number>(0)

    useEffect(() => {
        if (provider) {
            const groceryShop = GroceryShop__factory.connect(
                process.env.REACT_APP_CONTRACT_ADDRESS || "",
                provider.getSigner(0)
            )
            setGroceryShop(groceryShop)
        }
    }, [provider])

    useEffect(() => {
        connectToMetamask()
    }, [])

    const connectToMetamask = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", [])
        const balance = await provider.getBalance(accounts[0])
        const balanceInEther = ethers.utils.formatEther(balance)
        setBalanceInEther(parseFloat(balanceInEther))
        setProvider(provider)
    }

    const withdraw = () => {
        if (groceryShop) {
            groceryShop.withdraw()
        }
    }

    return (
        <div className="App">
            {provider ? (
                <div>
                    <Grid container spacing={2}>
                        {[...Array(3)].map((_, i) => {
                            return (
                                <Grid key={`item-${i}`} item md={4}>
                                    <ItemCard
                                        id={i}
                                        provider={provider}
                                        groceryShop={groceryShop}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <br />
                    <p className="balance">Balance: {balanceInEther} ether</p>

                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={withdraw}
                    >
                        Withdraw
                    </Button>
                </div>
            ) : (
                <Button
                    color="primary"
                    variant="contained"
                    onClick={connectToMetamask}
                >
                    Connect with metamask
                </Button>
            )}
        </div>
    )
}

export default App
