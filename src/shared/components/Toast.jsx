import React, { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import useToastNotification from '../custom_hooks/useToastNotification';
import { useTranslation } from 'react-i18next';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
});
export default function Toast() {
    const { toastState, handleClose } = useToastNotification();
    const { message, severity, open } = toastState;
    const { t } = useTranslation();

    return (
        <Snackbar
            open={ open }
            autoHideDuration={ 6000 }
            onClose={ handleClose }
            anchorOrigin={ { vertical: "top", horizontal: "right" } }
            sx={ { paddingTop: "75px" } }>

            <Alert onClose={ handleClose } severity={ severity } sx={ { width: '100%' } }>
                { t(message) }
            </Alert>
        </Snackbar>
    );
}

