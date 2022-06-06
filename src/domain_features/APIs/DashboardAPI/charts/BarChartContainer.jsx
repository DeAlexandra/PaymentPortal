import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BarChart from '../../../../shared/components/BarChart';
import { generateLabels, generateChartData } from "../../../../shared/utils/chart.utils";
import { generateChartStyle, generateOptions } from "../../../../shared/utils/chartProperties";
import { useGetCallRedux } from "../../../../shared/custom_hooks/index";
import DB_URL from '../../../../shared/utils/URLs';
import { getTransactionsAction, getTransactionsSuccess, getTransactionsFailure } from '../../../../shared/context/redux/actionCreators/transactions';

export default function BarChartContainer({ timeInterval, chartTitle }) {
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
