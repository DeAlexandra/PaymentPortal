import { useContext } from 'react';
import { ToastContext } from '@myorg/state';

const useToastNotification = () => {
    const { toastState, setToastState } = useContext(ToastContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setToastState({ open: false });
        }
        setToastState({ open: false });
    };
    return { toastState, handleClose };
};
export default useToastNotification;