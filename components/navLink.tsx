import {Button} from "@mui/material";
import * as React from "react";
// @ts-ignore
import {Link as ScrollLink} from "react-scroll";

interface NavLinkProps {
    path: string;
    label: string;
}

const NavLink = ({label, path}: NavLinkProps) => {
    return (
        <ScrollLink to={path} spy={true} smooth={true} offset={-150} duration={1000}>
            <Button variant="text" size="large" sx={{color: "white", textTransform: "capitalize"}}>
                {label}
            </Button>
        </ScrollLink>
    )
}

export default NavLink;