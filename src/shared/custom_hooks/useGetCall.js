import { useState, useEffect, useContext } from 'react';
import { fetchRequest } from './fetchRequests';
import ToastContext from '../context/ToastContext';

const useGetCall = (url, errorCode) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { toastState, setToastState } = useContext(ToastContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        await fetchRequest(url, successFetchCb, errorCb, errorCode, "GET");
    };

    const successFetchCb = (data) => {
        setData(data);
        setIsLoading(false);
    };
    const errorCb = (errorCode) => {
        setIsLoading(false);
        setToastState({ message: errorCode, severity: "error", open: true });
    };
    return { data, setData, isLoading, setIsLoading, toastState };
};

export { useGetCall };