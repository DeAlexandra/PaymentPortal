import React from 'react';
import BarChart from '../../../../shared/components/BarChart';
import { generateLabels, generateChartData } from "../../../../shared/utils/chart.utils";
import { generateChartStyle, generateOptions } from "../../../../shared/utils/chartProperties";

import { useGetFetchCall } from "../../../../shared/custom_hooks/useFetchCall";

export default function BarChartContainer({ timeInterval, chartTitle }) {
    const url = "http://localhost:3004/transactions";
    const { data: chart } = useGetFetchCall(url, "fail_fetch_transactions");
    const sortDates = chart.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log(sortDates);
    // chart.length > 0 && console.log(getDateFromArray(chart, 1));
    return (
        <BarChart
            data={ generateChartStyle(
                generateLabels(timeInterval),
                generateChartData(timeInterval, chart),
            ) }
            options={ generateOptions(chartTitle) } />
    );
}
