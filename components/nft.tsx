import {Card, CardMedia, Stack, CardContent, Typography, Button} from "@mui/material";
import Link from "next/link";
import * as React from "react";

interface NFTProps {
    nft: {
        image: string;
        name: string;
        price: number;
    }
}

const NFT = ({nft}: NFTProps) => {
    const {name, price, image} = nft;
    return (
        <Card sx={{backgroundColor: "background.paper"}} elevation={0}>
            <CardContent>
                <CardMedia
                    src={image}
                    component="img"
                    sx={{height: 300, objectFit: "cover", borderRadius: 0.5, mb: 4}}
                />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography
                        variant="h5"
                        sx={{color: "text.primary", textTransform: "uppercase"}}>
                        {name}
                    </Typography>

                    <Link href="https://app.gratie.xyz/home">
                        <Button
                            size="medium"
                            color="secondary"
                            variant="contained"
                            sx={{textTransform: "capitalize", color: "white"}}>
                            Buy
                        </Button>
                    </Link>
                </Stack>
                <Typography
                    variant="h6"
                    sx={{color: "text.primary"}}>
                    {price === 0 ? 'Free' : price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NFT;