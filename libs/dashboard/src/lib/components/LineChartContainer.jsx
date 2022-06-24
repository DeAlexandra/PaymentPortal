import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { generateChartStyle, generateOptions } from "@my-org/shared/utils";
import { generateChartData, generateLabels } from "@my-org/shared/utils";
import { dateFormatterShort } from '@my-org/shared/utils';
import { LineChart } from '@myorg/shared/components';
import { useGetCallRedux } from "@myorg/state";
import { DB_URL } from '@my-org/shared/utils';
import { getTransactionsAction, getTransactionsSuccess, getTransactionsFailure } from '@myorg/state';

export function LineChartContainer({ timeInterval, chartTitle, startDate, endDate }) {
    const url = `${DB_URL}/transactions`;
    const { fetchData } = useGetCallRedux(url, "fail_fetch_transactions", getTransactionsAction, getTransactionsSuccess, getTransactionsFailure);
    const chart = useSelector((state) => state.allTransactions.transactions);
    const labels = generateLabels(timeInterval, startDate, endDate);
    const labelDateTransaform = labels.length > 0 && labels.map(date => dateFormatterShort(date));

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <LineChart data={ generateChartStyle(
            labelDateTransaform,
            generateChartData(timeInterval, chart, startDate, endDate)
        ) }
            options={ generateOptions(chartTitle) }
        />
    );
}
export default LineChartContainer;