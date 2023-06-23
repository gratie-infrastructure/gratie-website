import {CardMedia, Stack, Box} from "@mui/material";
import React, {useState} from "react";
import Pill from "@/components/pill";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const PillTab = () => {
    const [activeTab, setActiveTab] = useState<string>("Reward Infrastructure");
    const handleClick = (tab: string): void => {
        setActiveTab(tab);
    }

    return (
        <Box>
            <Stack
                sx={{
                    borderRadius: 1,
                    backgroundColor: "secondary.main",
                    padding: 1
                }} direction="row" alignItems="center">
                <Pill
                    onClick={handleClick}
                    label="Reward Infrastructure"
                    value="Reward Infrastructure"
                    active={activeTab === "Reward Infrastructure"}
                />
                <Pill
                    onClick={handleClick}
                    label="Healthy Ecosystem"
                    value="Healthy Ecosystem"
                    active={activeTab === "Healthy Ecosystem"}
                />
                <Pill
                    onClick={handleClick}
                    label="Customer Analysis"
                    value="Customer Analysis"
                    active={activeTab === "Customer Analysis"}
                />
                <Pill
                    onClick={handleClick}
                    label="Improve Retention"
                    value="Improve Retention"
                    active={activeTab === "Improve Retention"}
                />
            </Stack>

            <Box>
                <Box sx={{display: activeTab === "Reward Infrastructure" ? 'block' : 'none'}}>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                alt="rewardBox"
                                src="/images/gift-box-landing.png"
                                sx={{objectFit: "contain"}}
                                component="img"
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="body1"
                                sx={{fontSize: 24}}>
                                Decentralized infrastructure where enterprise
                                can create reward incentivization using
                                cryptocurrency which will keep the service
                                providers loyal and motivated to stay within
                                the enterprise.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{display: activeTab === "Healthy Ecosystem" ? 'block' : 'none'}}>
                    <Grid container spacing={2} style={{alignItems: "center"}}>
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                alt="rewardBox"
                                src="/images/public.png"
                                sx={{objectFit: "contain"}}
                                component="img"
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="body1"
                                sx={{fontSize: 24}}>
                                Retaining service providers is difficult for
                                shared economy businesses, where they
                                tend to find loopholes to eliminate platform
                                fees. By using our infrastructure enterprises
                                can reward back to the service providers and
                                maintain a healthy ecosystem.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{display: activeTab === "Customer Analysis" ? 'block' : 'none'}}>
                    <Grid container spacing={2} style={{alignItems: "center"}}>
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                alt="rewardBox"
                                src="/images/tab3.png"
                                sx={{objectFit: "contain"}}
                                component="img"
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="body1"
                                sx={{fontSize: 24}}>
                                Enterprises can list their rewarding token to
                                open markets where new consumers can
                                invest and trade. Collaborating with co-
                                relating services to use rewarded tokens.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{display: activeTab === "Improve Retention" ? 'block' : 'none'}}>
                    <Grid container spacing={2} style={{alignItems: "center"}}>
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                alt="rewardBox"
                                src="/images/NewNFT.png"
                                sx={{objectFit: "contain"}}
                                component="img"
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography
                                variant="body1"
                                sx={{fontSize: 24}}>
                                Boost retention rates by offering incentives to
                                users and employees, creating a thriving
                                network that sustains long-term growth and a
                                harmonious business environment.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default PillTab;