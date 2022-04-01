import React, { useContext, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ToastContext from '../../context/ToastContext';
import { useTranslation } from 'react-i18next';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
});

export default function ToastNotification() {
    const { toastState, setToastState } = useContext(ToastContext);
    const { message, severity, open } = toastState;
    const { t } = useTranslation();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setToastState({ open: false });
        }
        setToastState({ open: false });
    };
    return (
        <>
            { open && <Snackbar
                open={ open }
                autoHideDuration={ 6000 }
                onClose={ handleClose }
                anchorOrigin={ { vertical: "top", horizontal: "right" } }
                sx={ { paddingTop: "75px" } }>

                <Alert onClose={ handleClose } severity={ severity } sx={ { width: '100%' } }>
                    { t(message) }
                </Alert>

            </Snackbar> }
        </>
    );
}
