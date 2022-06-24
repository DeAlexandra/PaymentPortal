import { LAST_YEAR, LAST_TWO_YEARS, CUSTOM_INTERVAL, lastYear, secondToLastYear, } from "./dateConstants";

const dateFormatter = (date) => date.toLocaleDateString('en-US', { year: "numeric", month: "short", day: "numeric" });
const dateFormatterShort = (date) => date.toLocaleDateString('en-US', { month: "short", day: "numeric" });

const dateFromThePast = (daysInThePast, date = new Date()) => {
    let specificDate = date;
    let dateInThePast = new Date((new Date(specificDate)).valueOf() - 1000 * 60 * 60 * 24 * daysInThePast);
    return dateInThePast.toLocaleString().split(',')[0].replace('/', '.').replace('/', '.');
};

const getNumberOfDaysOfThePreviousMonth = (presentDate) => {
    presentDate = new Date();
    const last = (new Date(presentDate.setDate(0))).setHours(23, 59, 59, 59); //last day of the previous month
    const first = (new Date(presentDate.setDate(1))).setHours(0, 0, 0, 0); //first day of the previous month
    const getNumberOfDays = Math.round((last - first) / (1000 * 60 * 60 * 24));
    return getNumberOfDays;
};

const daysLabelDateTransformation = (date) => {
    let day = date.toLocaleDateString('en-GB', { day: 'numeric' });
    return `${day} ${date.toLocaleString('en-GB', { month: 'short' })} ${date.getFullYear()}`;
};

const getDatesInInterval = (startDate, endDate) => {
    let datesArray = [];
    for (let i = new Date(startDate); i <= new Date(endDate); i.setDate(i.getDate() + 1)) {
        datesArray.push(new Date(i));
    }
    return datesArray;
};

const checkForDateOccurrence = (date, sampleData) => {
    let occurrence = 0;
    for (let i = 0; i < sampleData.length; i++) {
        if (date === sampleData[i].date) {
            occurrence++;
        }
    }
    return occurrence;
};

const getDateFromDB = (sampleData, i) => {
    return new Date(sampleData[i].date);
};

const setMidnightTime = (date) => {
    return date.setHours(0, 0, 0, 0);
};

const setChartData = (chartData, chartDataLength, sampleData, lastDayOfPreviousMonth = null) => {
    for (let i = 0; i < chartDataLength; i++) {
        chartData[i] = checkForDateOccurrence(dateFromThePast(i, lastDayOfPreviousMonth), sampleData);
    }
};

const setChartDataYearlyCustomInterval = (chartData, chartDataLength, sampleData, timePeriod, datesInterval) => {
    for (let i = 0; i < chartDataLength; i++) {
        for (let j = 0; j < sampleData.length; j++) {
            const timePeriods = [LAST_YEAR, LAST_TWO_YEARS, CUSTOM_INTERVAL];
            const compareMonthYear = timePeriod !== CUSTOM_INTERVAL && getDateFromDB(sampleData, j).getMonth() === i && getDateFromDB(sampleData, j).getFullYear() === (timePeriod === LAST_YEAR ? lastYear : secondToLastYear);
            const compareMilliseconds = timePeriod === CUSTOM_INTERVAL && (new Date(setMidnightTime(getDateFromDB(sampleData, j))).getTime() === setMidnightTime(datesInterval[i]));
            if (timePeriods.indexOf(timePeriod) >= 0 && (compareMonthYear || compareMilliseconds)) {
                chartData[i] = chartData[i] + 1;
            }
        }
    }
};

export {
    dateFormatter, dateFormatterShort, dateFromThePast, daysLabelDateTransformation, getNumberOfDaysOfThePreviousMonth, getDatesInInterval, checkForDateOccurrence, getDateFromDB, setMidnightTime, setChartData, setChartDataYearlyCustomInterval
};