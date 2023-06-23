"use client"

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PillTab from "@/components/pillTab";
import Container from "@mui/material/Container";

export default function Chip() {
    return (
        <Container>
            <Grid container spacing={1} sx={{margin: "auto"}}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        width: "100%",
                        fontFamily: "Clash Display",
                        fontWeight: 600,
                        mb: 4
                    }}>
                    Our Solutions
                </Typography>
                <PillTab/>
            </Grid>
        </Container>
    )
}
