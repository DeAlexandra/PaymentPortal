import React from 'react';
import { Typography } from '@material-ui/core';

export default function CopyRight() {
    return (
        <Typography >{ "Copyright © My Website " }{ new Date().getFullYear() }</Typography>
    );
}
