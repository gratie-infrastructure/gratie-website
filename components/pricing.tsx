"use client"

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import {Stack} from "@mui/material";
import Container from "@mui/material/Container";

export default function Pricing() {
    return (
        <Box
            sx={{
                backgroundImage: `url("/images/community-arch.png")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "fit",
                backgroundPosition: "center",
                py: 8, minHeight: "50vh"
            }}>
            <Container>
                <Typography variant="h5" sx={{mb: 4, color: "text.primary", fontFamily: "Clash Display"}}>
                    Join the thriving community
                </Typography>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12} md={6}>
                        <Stack>
                            <Stack direction="row" spacing={2}>
                                <Button
                                    sx={{color: "white", textTransform: "none"}}
                                    size="large"
                                    variant="text">
                                    To get more updates
                                </Button>
                                <Image src="/images/Twitter icon.png" alt="Twitter icon" height={50} width={50}/>
                            </Stack>
                            <Box>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="medium"
                                    sx={{textTransform: "none", color: "white"}}>
                                    Join us
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Stack direction="row" justifyContent="flex-end">
                            <Box>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        sx={{color: "white", textTransform: "none"}}
                                        size="large"
                                        variant="text">
                                        To join our community
                                    </Button>
                                    <Image
                                        style={{objectFit: "contain"}}
                                        src="/images/Discord icon.png"
                                        alt="Discord icon"
                                        height={60}
                                        width={60}/>
                                </Stack>
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="medium"
                                        sx={{textTransform: "none", color: "white"}}>
                                        Join us
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
