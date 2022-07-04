import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    useGetCallRedux,
    useLocationId,
    getTransactionDetailsAction,
    getTransactionDetailsSuccess,
    getTransactionDetailsFailure,
    removeTransactionDetails,
} from "@myorg/state";
import { DB_URL } from "@my-org/shared/utils";

const useFetchTransaction = () => {
    const dispatch = useDispatch();
    const transactionId = useLocationId();
    const url = `${DB_URL}/transactions/${transactionId}`;
    const { fetchData } = useGetCallRedux(
        url,
        "fail_fetch_transaction",
        getTransactionDetailsAction,
        getTransactionDetailsSuccess,
        getTransactionDetailsFailure
    );
    useEffect(() => {
        fetchData();
        return () => {
            dispatch(removeTransactionDetails());
        };
    }, []);
};

export { useFetchTransaction };
