"use client"

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';
import {nfts} from "@/utils/data";
import NFT from "@/components/nft";
import Container from "@mui/material/Container";

export default function UseCase() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <Container>
            <Grid container spacing={1} sx={{mt: 18, mb: 18}}>
                <Box display={'flex'} alignItems={'start'} justifyContent={'space-between'} width={'100%'}>
                    <Typography variant="h5" className='small-tittel' gutterBottom>
                        Find out more about buying NFT
                    </Typography>
                    <Typography variant="h5" style={{color: "#32D94B", cursor: "pointer"}} gutterBottom
                                onClick={() => setIsFlipped(!isFlipped)}>
                        {isFlipped ? "see less" : "see all"}
                    </Typography>
                </Box>
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
    );
}