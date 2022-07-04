import { useSelector } from "react-redux";
import { generateChartStyle, generateOptions, dateFormatterShort, generateChartData, generateLabels } from "@my-org/shared/utils";
import { LineChart } from "@myorg/shared/components";
import { useCustomIntervalDates } from "../API/useCustomIntervalDates";

function LineChartContainer({ timeInterval, chartTitle, startDate, endDate }) {
    const chart = useSelector((state) => state.allTransactions.transactions);
    const labels = generateLabels(timeInterval, startDate, endDate);
    const labelDateTransaform =
        labels.length > 0 && labels.map((date) => dateFormatterShort(date));
    useCustomIntervalDates();

    return (
        <LineChart
            data={ generateChartStyle(
                labelDateTransaform,
                generateChartData(timeInterval, chart, startDate, endDate)
            ) }
            options={ generateOptions(chartTitle) }
        />
    );
}
export { LineChartContainer };
