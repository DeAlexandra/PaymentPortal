import { useState, useContext } from 'react';
import { fetchRequest } from './fetchRequests';
import ToastContext from '../../shared/context/ToastContext';
import { useNavigate } from 'react-router-dom';
import store from '../../shared/context/redux/store';
import { setDrawerClose } from '../context/redux/actionCreators/drawerActionCreator';

const usePatchCall = (url, errorCode, redirectUrl) => {
    const [isLoading, setIsLoading] = useState(false);
    const { toastState, setToastState } = useContext(ToastContext);
    const navigate = useNavigate();

    const updateEntry = async (values) => {
        setIsLoading(true);
        await fetchRequest(url, successPatchCb, errorCb, errorCode, "PATCH", values);
    };

    const successPatchCb = () => {
        setIsLoading(false);
        setToastState({ message: "success_edit_transaction", severity: "success", open: true });
        store.dispatch(setDrawerClose());
        navigate(`/${redirectUrl}`);
    };
    const errorCb = () => {
        setIsLoading(false);
        setToastState({ message: errorCode, severity: "error", open: true });
    };
    return { updateEntry };
};

export { usePatchCall };