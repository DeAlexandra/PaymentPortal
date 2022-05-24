import BarChartContainer from "../../APIs/DashboardAPI/charts/BarChartContainer";
import { LAST_TEN_DAYS, LAST_MONTH, LAST_YEAR, LAST_TWO_YEARS, secondToLastYear, lastDayOfPreviousMonth, lastYear } from "../../../shared/utils/dateConstants";
import CustomIntervalPicker from "./CustomIntervalPicker";

const tabs = [
    {
        label: "last_ten_days",
        Component: <BarChartContainer timeInterval={ LAST_TEN_DAYS } chartTitle={ "last_ten_days" } />
    },
    {
        label: "last_month",
        Component: <BarChartContainer timeInterval={ LAST_MONTH } chartTitle={ `${lastDayOfPreviousMonth.toLocaleString("en-GB", { month: "long" })} ${lastDayOfPreviousMonth.getFullYear()}` } />
    },
    {
        label: "last_year",
        Component: <BarChartContainer timeInterval={ LAST_YEAR } chartTitle={ `${lastYear}` } />
    },
    {
        label: "two_years_ago",
        Component: <BarChartContainer timeInterval={ LAST_TWO_YEARS } chartTitle={ `${secondToLastYear}` } />
    },
    {
        label: "custom_interval",
        Component: <CustomIntervalPicker />
    }
];

export default tabs;
