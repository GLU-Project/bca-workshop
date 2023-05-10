import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { GroceryShop } from "../typechain-types"

const ItemCard = (props: {
    id: number
    provider: ethers.providers.Web3Provider | undefined
    groceryShop: GroceryShop | undefined
}) => {
    const [item, setItem] = useState<
        | {
              name: string
              numberOfItems: number
          }
        | undefined
    >()

    useEffect(() => {
        const getNumberOfItems = async () => {}
        getNumberOfItems()
    }, [props.groceryShop, props.id])

    const addItem = () => {}

    const buyItem = () => {}

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {item?.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {item?.numberOfItems}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" onClick={buyItem}>
                    Buy
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={addItem}
                >
                    Add
                </Button>
            </CardActions>
        </Card>
    )
}

export default ItemCard
