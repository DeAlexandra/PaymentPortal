import { useContext } from 'react';
import { fetchRequest } from './fetchRequests';
import ToastContext from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';
import store from '../context/redux/store';
import { useDispatch } from 'react-redux';
import { setDrawerClose } from '../context/redux/actionCreators/drawerActionCreator';

const useUpdateCallRedux = (url, errorCode, successCode, redirectUrl, updateDispatchAction, updateEntitySuccess, updateEntityFailure) => {
    const { setToastState } = useContext(ToastContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const updateEntry = async (values) => {
        dispatch(updateDispatchAction());
        await fetchRequest(url, successPatchCb, errorCb, errorCode, "PATCH", values);
    };

    const successPatchCb = () => {
        dispatch(updateEntitySuccess());
        setToastState({ message: successCode, severity: "success", open: true });
        store.dispatch(setDrawerClose());
        navigate(`/${redirectUrl}`);
    };
    const errorCb = (errorCode) => {
        dispatch(updateEntityFailure(errorCode));
        setToastState({ message: errorCode, severity: "error", open: true });
    };
    return { updateEntry };
};

export default useUpdateCallRedux;