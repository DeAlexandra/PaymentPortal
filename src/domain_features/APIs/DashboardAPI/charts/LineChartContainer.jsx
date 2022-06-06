import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { generateChartStyle, generateOptions } from "../../../../shared/utils/chartProperties";
import { generateChartData, generateLabels } from "../../../../shared/utils/chart.utils";
import { dateFormatterShort } from '../../../../shared/utils/dateManipulationFunctions';
import LineChart from '../../../../shared/components/LineChart';
import { useGetCallRedux } from "../../../../shared/custom_hooks/index";
import DB_URL from '../../../../shared/utils/URLs';
import { getTransactionsAction, getTransactionsSuccess, getTransactionsFailure } from '../../../../shared/context/redux/actionCreators/transactions';

export default function LineChartContainer({ timeInterval, chartTitle, startDate, endDate }) {
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
