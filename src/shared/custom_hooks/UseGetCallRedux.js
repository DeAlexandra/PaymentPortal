import { useContext } from 'react';
import { fetchRequest } from './fetchRequests';
import ToastContext from '../context/ToastContext';
import { useDispatch } from 'react-redux';

const useGetCallRedux = (url, errorCode, getDispatchAction, getEntitySucess, getEntityFailure) => {
    const { toastState, setToastState } = useContext(ToastContext);
    const dispatch = useDispatch();

    const fetchData = async () => {
        dispatch(getDispatchAction());
        await fetchRequest(url, successFetchCb, errorCb, errorCode, "GET");
    };

    const successFetchCb = (data) => {
        dispatch(getEntitySucess(data));
    };

    const errorCb = (errorCode) => {
        dispatch(getEntityFailure(errorCode));
        setToastState({ message: errorCode, severity: "error", open: true });
    };
    return { fetchData, toastState };
};

export default useGetCallRedux;