import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

export default function ToastNotification({ message, severity }) {
    const [open, setOpen] = React.useState(true);
    const { t } = useTranslation();

    return (
        <Box sx={ { display: "flex", justifyContent: "center", alignItems: "center", mt: "100px" } }>
            <Collapse in={ open }>
                <Alert
                    severity={ severity }
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={ () => {
                                setOpen(false);
                            } }
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={ { mb: 2 } }
                >
                    { t(message) }
                </Alert>
            </Collapse>
        </Box>
    );
}
