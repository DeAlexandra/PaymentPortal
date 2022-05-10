import React from 'react';
import { Box } from '@material-ui/core';
import { CircularProgress } from '@mui/material';

export default function IsLoading() {
    return (
        <Box
            sx={ {
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "150px"
            } }>
            <CircularProgress />
        </Box>
    );
}
