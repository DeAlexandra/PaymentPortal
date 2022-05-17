import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import LanguageSelect from '../LanguageSelect';
import ProfileIcon from './ProfileIcon';
import Title from "./Title";

const DRAWER_WIDTH = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

export default function Header({ handleDrawerOpen, open }) {
    return (
        <AppBar
            position="fixed"
            open={ open }>
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={ handleDrawerOpen }
                    edge="start"
                    sx={ {
                        marginRight: 5,
                        ...(open && { display: "none" })
                    } }
                >
                    <MenuIcon />
                </IconButton>
                <Link to="/" >
                    <img src={ logo } alt="logo" width={ "65px" }
                    />
                </Link>
                <Title text={ "dashboard" } />
                <LanguageSelect />
                <ProfileIcon />
            </Toolbar>
        </AppBar>
    );
}
