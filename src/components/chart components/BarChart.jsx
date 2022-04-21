import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { generateLabels, generateChartData } from "./chartsFunctions";
import { generateChartStyle, generateOptions } from "./chartProperties";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
);

export default function BarChart({ timeInterval, chartTitle }) {
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

    return (
        <Bar
            data={ generateChartStyle(
                generateLabels(timeInterval),
                generateChartData(timeInterval, chart),
            ) }
            options={ generateOptions(chartTitle) } />
    );
}
