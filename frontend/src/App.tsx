import { Button, Grid } from "@mui/material"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import "./App.css"
import ItemCard from "./components/ItemCard"

import { GroceryShop } from "./typechain-types"

function App() {
    const [provider, setProvider] = useState<
        ethers.providers.Web3Provider | undefined
    >()
    const [groceryShop, setGroceryShop] = useState<GroceryShop | undefined>()
    const [balanceInEther, setBalanceInEther] = useState<number>(0)

    useEffect(() => {}, [provider])

    useEffect(() => {
        connectToMetamask()
    }, [])

    const connectToMetamask = async () => {}

    const withdraw = () => {}

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
