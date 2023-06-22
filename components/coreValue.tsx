"use client"

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import {CardMedia} from "@mui/material";
import Container from "@mui/material/Container";

export default function CoreValue() {
    return (
        <Box>
            <Container>
                <Typography
                    align="center"
                    variant="h3"
                    sx={{fontFamily: 'Clash Display', fontWeight: 600, mb: 4}}>
                    Process
                </Typography>
                <Box>
                    <Box sx={{display: {xs: "none", lg: "block"}}}>
                        <CardMedia
                            alt="rewardBox"
                            src="/images/process.png"
                            sx={{objectFit: "contain"}}
                            component="img"
                        />
                    </Box>
                    <Box sx={{display: {xs: "block", lg: "none"}}}>
                        <CardMedia
                            alt="rewardBox"
                            src="/images/public.png"
                            sx={{objectFit: "contain"}}
                            component="img"
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}