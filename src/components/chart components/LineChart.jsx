import React, { useState, useEffect } from 'react';
import { generateChartStyle, generateOptions } from "./chartProperties";
import { generateChartData, dateFormatterShort, generateLabels } from "./chartsFunctions";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
);


export default function LineChart({ timeInterval, chartTitle, startDate, endDate }) {
    const [chart, setChart] = useState([]);
    const url = "http://localhost:3004/transactions";
    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await fetch(url);
            const res = await response.json();
            setChart(res);
        } catch (err) {
            console.log(err);
        }
    };

    const labels = generateLabels(timeInterval, startDate, endDate);
    const labelDateTransaform = labels.length > 0 && labels.map(date => dateFormatterShort(date));

    return (
        <>
            <Line data={ generateChartStyle(
                labelDateTransaform,
                generateChartData(timeInterval, chart, startDate, endDate)
            ) }
                options={ generateOptions(chartTitle) }
            />
        </>
    );
}
