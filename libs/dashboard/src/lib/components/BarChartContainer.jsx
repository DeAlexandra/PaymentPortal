import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from '@myorg/shared/components';
import { generateLabels, generateChartData } from "@my-org/shared/utils";
import { generateChartStyle, generateOptions } from "@my-org/shared/utils";
import { useGetCallRedux } from "@myorg/state";
import { DB_URL } from '@my-org/shared/utils';
import { getTransactionsAction, getTransactionsSuccess, getTransactionsFailure } from '@myorg/state';

export function BarChartContainer({ timeInterval, chartTitle }) {
    const url = `${DB_URL}/transactions`;
    const { fetchData } = useGetCallRedux(url, "fail_fetch_transactions", getTransactionsAction, getTransactionsSuccess, getTransactionsFailure);
    const chart = useSelector((state) => state.allTransactions.transactions);

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <BarChart
            data={ generateChartStyle(
                generateLabels(timeInterval),
                generateChartData(timeInterval, chart),
            ) }
            options={ generateOptions(chartTitle) } />
    );
}
export default BarChartContainer;