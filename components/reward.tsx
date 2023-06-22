"use client"

import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import Link from "next/link";
import RewardBox from "@/components/rewardBox";
import * as React from "react";
import Container from "@mui/material/Container";

export default function Reward() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                pt: {xs: 15, lg: 0}
            }}>
            <Container>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item={true} xs={12} md={6}>
                        <Stack direction="column" spacing={2} sx={{alignItems: {xs: "center", lg: "flex-start"}}}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: "Clash Display",
                                    color: "text.primary",
                                    lineHeight: "45.55px",
                                    fontWeight: 500,
                                    mb: 4,
                                    textAlign: {xs: "center", lg: "left"}
                                }}>
                                A next generation SaaS platform for your enterprise reward management.
                            </Typography>
                            <Link href="https://app.gratie.xyz/home" passHref>
                                <Button
                                    size="medium"
                                    color="secondary"
                                    variant="contained"
                                    sx={{textTransform: "capitalize", color: "white"}}>
                                    Try for Free
                                </Button>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Stack direction="column" spacing={2} sx={{alignItems: {xs: "center", lg: "flex-start"}}}>
                            <RewardBox/>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
