import React from 'react';
import { generateChartStyle, generateOptions } from "../../../../shared/utils/chartProperties";
import { generateChartData, generateLabels } from "../../../../shared/utils/chart.utils";
import { dateFormatterShort } from '../../../../shared/utils/dateManipulationFunctions';
import LineChart from '../../../../shared/components/LineChart';
import { useGetFetchCall } from "../../../../shared/custom_hooks/useFetchCall";

export default function LineChartContainer({ timeInterval, chartTitle, startDate, endDate }) {
    const url = "http://localhost:3004/transactions";
    const { data: chart } = useGetFetchCall(url, "fail_fetch_transactions");
    const labels = generateLabels(timeInterval, startDate, endDate);
    const labelDateTransaform = labels.length > 0 && labels.map(date => dateFormatterShort(date));
    return (
        <LineChart data={ generateChartStyle(
            labelDateTransaform,
            generateChartData(timeInterval, chart, startDate, endDate)
        ) }
            options={ generateOptions(chartTitle) }
        />
    );
}
