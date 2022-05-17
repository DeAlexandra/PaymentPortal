import React from 'react';
import { generateChartStyle, generateOptions } from "../../../../shared/utils/chartProperties";
import { generateChartData, generateLabels } from "../../../../shared/utils/chart.utils";
import { dateFormatterShort } from '../../../../shared/utils/dateManipulationFunctions';
import LineChart from '../../../../shared/components/LineChart';
import { useGetCall } from "../../../../shared/custom_hooks/useGetCall";
import DB_URL from '../../../../shared/utils/URLs';

export default function LineChartContainer({ timeInterval, chartTitle, startDate, endDate }) {
    const url = `${DB_URL}/transactions`;
    const { data: chart } = useGetCall(url, "fail_fetch_transactions");
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
