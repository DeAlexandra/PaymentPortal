import { useSelector } from "react-redux";
import { BarChart } from "@myorg/shared/components";
import { generateLabels, generateChartData, generateChartStyle, generateOptions } from "@my-org/shared/utils";
import { useBarChartTransactions } from "../API/useBarChartTransactions";

function BarChartContainer({ timeInterval, chartTitle }) {
    const chart = useSelector((state) => state.allTransactions.transactions);
    useBarChartTransactions();
    return (
        <BarChart
            data={ generateChartStyle(
                generateLabels(timeInterval),
                generateChartData(timeInterval, chart)
            ) }
            options={ generateOptions(chartTitle) }
        />
    );
}
export { BarChartContainer };
