"use client"

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';
import {nfts} from "@/utils/data";
import NFT from "@/components/nft";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {ChevronRight} from "@mui/icons-material";

export default function UseCase() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <Box sx={{py: 8}}>
            <Container>
                <Grid container spacing={1}>
                    <Grid container={true} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h5" sx={{color: "text.primary"}}>
                                Find out more about buying NFT
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Button
                                color="secondary"
                                endIcon={<ChevronRight color="secondary"/>}
                                variant="text"
                                sx={{cursor: "pointer", textTransform: "capitalize"}}
                                onClick={() => setIsFlipped(!isFlipped)}>
                                {isFlipped ? "see less" : "see all"}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{mt: 5}}>
                        {nfts.map((nft, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                    <NFT nft={nft}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}