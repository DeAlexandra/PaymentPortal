import React from 'react';
import { Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

export default function FailUserFetch() {
    const { t } = useTranslation();
    return (
        <Box sx={ {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "150px",
            minHeight: "100vh",
        } } >
            <Alert severity="error" color="error" variant="outlined">
                <Typography> { t("fail_fetch_users") }</Typography>
            </Alert>
        </Box>
    );
}
