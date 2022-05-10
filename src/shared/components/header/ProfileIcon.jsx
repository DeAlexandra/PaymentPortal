import React from 'react';
import IconButton from "@mui/material/IconButton";
import PersonIcon from '@mui/icons-material/Person';

export default function ProfileIcon() {
    return (
        <IconButton
            position="right"
            color="inherit"
            edge="end"
        >
            <PersonIcon />
        </IconButton>
    );
}
