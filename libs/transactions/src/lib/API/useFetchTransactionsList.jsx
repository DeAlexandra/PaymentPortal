import { useEffect } from "react";
import { DB_URL } from "@my-org/shared/utils";
import {
    useGetCallRedux,
    getTransactionsAction,
    getTransactionsFailure,
    getTransactionsSuccess,
} from "@myorg/state";
import { useParams } from "react-router";

const useFetchTransactionsList = () => {
    const params = useParams();
    const url = `${DB_URL}/transactions`;
    const { fetchData } = useGetCallRedux(
        url,
        "fail_fetch_transactions",
        getTransactionsAction,
        getTransactionsSuccess,
        getTransactionsFailure
    );
    const hasParams = Object.keys(params).length !== 0;

    useEffect(() => {
        if (!hasParams) fetchData();
    }, [hasParams]);
};

export { useFetchTransactionsList };
