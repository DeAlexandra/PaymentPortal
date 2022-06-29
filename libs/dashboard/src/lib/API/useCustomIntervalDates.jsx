import { useEffect } from "react";
import { DB_URL } from "@my-org/shared/utils";
import {
    getTransactionsAction,
    getTransactionsSuccess,
    getTransactionsFailure,
    useGetCallRedux
} from "@myorg/state";

const useCustomIntervalDates = () => {
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
export { useCustomIntervalDates };
