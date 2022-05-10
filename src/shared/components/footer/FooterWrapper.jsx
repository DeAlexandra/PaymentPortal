import React from 'react';
import { Box } from '@mui/system';

export default function FooterWrapper({ children }) {
    return (
        <Box sx={ {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center",
            py: "16px"
        } }>
            { children }
        </Box>
    );
}
