import { lastDayOfPreviousMonth, monthNames, LAST_TEN_DAYS, LAST_MONTH, LAST_YEAR, LAST_TWO_YEARS, CUSTOM_INTERVAL } from "./dateConstants";
import { dateFromThePast, daysLabelDateTransformation, getNumberOfDaysOfThePreviousMonth, getDatesInInterval, setChartData, setChartDataYearlyCustomInterval } from "./dateManipulationFunctions";

const generateLabels = (timePeriod, startDate = null, endDate = null) => {
    let arrayOfChartLabels = [];
    if (timePeriod === LAST_TEN_DAYS) {
        for (let i = 0; i < 10; i++) {
            arrayOfChartLabels[i] = daysLabelDateTransformation(new Date(dateFromThePast(i)));
        }
    } else if (timePeriod === LAST_MONTH) {
        for (let i = getNumberOfDaysOfThePreviousMonth(); i > 0; i--) {
            arrayOfChartLabels[getNumberOfDaysOfThePreviousMonth() - i] = i;
        }
    } else if (timePeriod === LAST_YEAR || timePeriod === LAST_TWO_YEARS) {
        for (let i = monthNames.length - 1; i >= 0; i--) {
            arrayOfChartLabels[i] = monthNames[monthNames.length - i - 1];
        };
    } else if (timePeriod === CUSTOM_INTERVAL) {
        return (startDate !== null && endDate !== null && getDatesInInterval(startDate, endDate));
    }
    return arrayOfChartLabels.reverse();
};

const generateChartData = (timePeriod, sampleData, startDate = null, endDate = null) => {
    let chartData = [];
    if (timePeriod === LAST_TEN_DAYS || timePeriod === LAST_MONTH) {
        const TEN_DAYS = 10;
        const chartDataLength = (timePeriod === LAST_TEN_DAYS && TEN_DAYS) || (timePeriod === LAST_MONTH && getNumberOfDaysOfThePreviousMonth());
        const lastDay = (timePeriod === LAST_MONTH && lastDayOfPreviousMonth) || new Date();
        setChartData(chartData, chartDataLength, sampleData, lastDay);
    }
    else if (timePeriod === LAST_YEAR || timePeriod === LAST_TWO_YEARS || timePeriod === CUSTOM_INTERVAL) {
        const datesInterval = getDatesInInterval(startDate, endDate);
        const chartDataLength = timePeriod !== CUSTOM_INTERVAL ? monthNames.length : datesInterval.length;
        chartData = new Array(chartDataLength).fill(0);
        setChartDataYearlyCustomInterval(chartData, chartDataLength, sampleData, timePeriod, datesInterval);
        return chartData;
    }
    return chartData.reverse();
};

export { generateLabels, generateChartData };
