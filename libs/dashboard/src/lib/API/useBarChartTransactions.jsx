import { useEffect } from 'react';
import { useGetCallRedux } from "@myorg/state";
import { DB_URL } from "@my-org/shared/utils";
import {
    getTransactionsAction,
    getTransactionsSuccess,
    getTransactionsFailure,
} from "@myorg/state";

const useBarChartTransactions = () => {
    const url = `${DB_URL}/transactions`;
    const { fetchData } = useGetCallRedux(
        url,
        "fail_fetch_transactions",
        getTransactionsAction,
        getTransactionsSuccess,
        getTransactionsFailure
    );

    useEffect(() => {
        fetchData();
    }, []);

};
export { useBarChartTransactions };