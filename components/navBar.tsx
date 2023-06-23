import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "@/components/logo";
import {Stack} from "@mui/material";
import NavLink from "@/components/navLink";
// @ts-ignore
import {Link as ScrollLink} from "react-scroll";
import Link from "next/link";

interface Page {
    label: string;
    path: string;
    external: boolean;
}

const pages: Array<Page> = [
    {label: "About", path: "about", external: false},
    {label: "Pricing", path: "pricing", external: false},
    {label: "Community", path: "community", external: false},
    {label: "Replace", path: "https://hayfordstanley.vercel.app", external: true},
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [visibleWallet, setVisibleWallet] = React.useState(false);

    React.useEffect(() => setVisibleWallet(true));

    return (
        <AppBar elevation={0} color="primary">
            <Container>
                <Toolbar variant="dense">
                    <Stack
                        sx={{width: "100%"}}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between">
                        <Logo/>
                        <Box sx={{display: {xs: "block", lg: "none"}}}>
                            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorElNav}
                                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                                keepMounted={true}
                                transformOrigin={{vertical: "top", horizontal: "left",}}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{display: {xs: "block", md: "none"},}}>
                                {pages.map(({path, label, external}: Page) => (
                                    external ?
                                        <MenuItem key={path} sx={{pr: 10}}>
                                            <Link style={{fontFamily: "DM Sans"}} href={path}>{label}</Link>
                                        </MenuItem>
                                        : (
                                            <ScrollLink to={path} spy={true} smooth={true} offset={50} duration={500}>
                                                <MenuItem
                                                    key={path}
                                                    onClick={handleCloseNavMenu}
                                                    sx={{pr: 10}}>
                                                    <Typography textAlign="center">{label}</Typography>
                                                </MenuItem>
                                            </ScrollLink>
                                        )
                                ))}
                            </Menu>
                        </Box>
                        <Stack sx={{display: {xs: "none", lg: "block"}}} direction="row" spacing={2}>
                            {pages.map(({path, label, external}: Page) => (
                                external ?
                                    <Link style={{fontFamily: "DM Sans"}} href={path}>{label}</Link> :
                                    <NavLink path={path} label={label}/>
                            ))}
                        </Stack>
                        <Button
                            size="medium"
                            color="secondary"
                            sx={{textTransform: "capitalize", color: "white", display: {xs: "none", lg: "block"}}}
                            href="https://app.gratie.xyz/home"
                            variant="contained">
                            Get Started
                        </Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ResponsiveAppBar;
