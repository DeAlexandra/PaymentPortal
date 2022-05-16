import React from 'react';
import BarChart from '../../../../shared/components/BarChart';
import { generateLabels, generateChartData } from "../../../../shared/utils/chart.utils";
import { generateChartStyle, generateOptions } from "../../../../shared/utils/chartProperties";
import { useGetCall } from "../../../../shared/custom_hooks/useGetCall";
import DB_URL from '../../../../shared/utils/URLs';

export default function BarChartContainer({ timeInterval, chartTitle }) {
    const url = `${DB_URL}/transactions`;
    const { data: chart } = useGetCall(url, "fail_fetch_transactions");

    return (
        <BarChart
            data={ generateChartStyle(
                generateLabels(timeInterval),
                generateChartData(timeInterval, chart),
            ) }
            options={ generateOptions(chartTitle) } />
    );
}
