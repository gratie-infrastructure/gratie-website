import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'DM Sans, Clash Display'
    },
    palette: {
        primary: {
            main: "#000000"
        },
        secondary: {
            main: "#32D94B"
        },
        background: {
            default: "#0E1803"
        },
        text: {
            primary: "#FFFFFF"
        },
        mode: 'dark'
    },
    shape: {
        borderRadius: 32
    }
});

export {theme};