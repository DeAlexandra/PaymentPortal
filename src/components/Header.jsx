import React from 'react'
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import logo from "./logo.png"

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
                <Typography
                    sx={ { p: 2 } }
                    variant="h6"
                    flexGrow={ 1 }
                >
                    Dashboard App
                </Typography>
                <IconButton
                    position="right"
                    color="inherit"
                    edge="end"
                >
                    <PersonIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
