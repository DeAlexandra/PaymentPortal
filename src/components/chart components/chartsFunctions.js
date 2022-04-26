const dateFormatter = (date) => date.toLocaleDateString('en-US', { year: "numeric", month: "short", day: "numeric" });
const dateFormatterShort = (date) => date.toLocaleDateString('en-US', { month: "short", day: "numeric" });

const dateFromThePast = (daysInThePast, date = new Date()) => {
    let specificDate = date;
    let dateInThePast = new Date((new Date(specificDate)).valueOf() - 1000 * 60 * 60 * 24 * daysInThePast);
    return dateInThePast.toLocaleString().split(',')[0].replace('/', '.').replace('/', '.');
};

const daysLabelDateTransformation = (date) => {
    let day = date.toLocaleDateString('en-GB', { day: 'numeric' });
    return `${day} ${date.toLocaleString('en-GB', { month: 'short' })} ${date.getFullYear()}`;
};

const lastDayOfPreviousMonth = new Date(new Date().setDate(0));
const lastYear = new Date().getFullYear() - 1;
const secondToLastYear = lastYear - 1;

const getNumberOfDaysOfThePreviousMonth = (presentDate) => {
    presentDate = new Date();
    const last = (new Date(presentDate.setDate(0))).setHours(23, 59, 59, 59); //last day of the previous month
    const first = (new Date(presentDate.setDate(1))).setHours(0, 0, 0, 0); //first day of the previous month
    const getNumberOfDays = Math.round((last - first) / (1000 * 60 * 60 * 24));
    return getNumberOfDays;
};

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDatesInInterval = (startDate, endDate) => {
    let datesArray = [];
    for (let i = new Date(startDate); i <= new Date(endDate); i.setDate(i.getDate() + 1)) {
        datesArray.push(new Date(i));
    }
    return datesArray;
};

const generateLabels = (timePeriod, startDate = null, endDate = null) => {
    let array = [];
    if (timePeriod === "Last 10 Days") {
        for (let i = 0; i < 10; i++) {
            array[i] = daysLabelDateTransformation(new Date(dateFromThePast(i)));
        }
    } else if (timePeriod === "Last Month") {
        for (let i = getNumberOfDaysOfThePreviousMonth(); i > 0; i--) {
            array[getNumberOfDaysOfThePreviousMonth() - i] = i;
        }
    } else if (timePeriod === "Last Year" || timePeriod === "Two Years Ago") {
        for (let i = monthNames.length - 1; i >= 0; i--) {
            array[i] = monthNames[monthNames.length - i - 1];
        };
    } else if (timePeriod === "Custom Interval") {
        return (startDate !== null && endDate !== null && getDatesInInterval(startDate, endDate));
    }
    return array.reverse();
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

const generateChartData = (timePeriod, sampleData, startDate = null, endDate = null) => {
    let array = [];
    let number = 0;

    if (timePeriod === "Last 10 Days") {
        number = 10;
        for (let i = 0; i < number; i++) {
            array[i] = checkForDateOccurrence(dateFromThePast(i), sampleData);
        }
    }
    else if (timePeriod === "Last Month") {
        number = getNumberOfDaysOfThePreviousMonth();
        for (let i = 0; i < number; i++) {
            array[i] = checkForDateOccurrence(dateFromThePast(i, lastDayOfPreviousMonth), sampleData);
        }
    }
    else if (timePeriod === "Last Year" || timePeriod === "Two Years Ago") {
        array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let number = array.length;
        for (let i = 0; i < sampleData.length; i++) {
            for (let j = 0; j < number; j++) {
                if (new Date(sampleData[i].date).getMonth() === j && new Date(sampleData[i].date).getFullYear() === (timePeriod === "Last Year" ? lastYear : secondToLastYear)) {
                    array[j] = array[j] + 1;
                    break;
                }
            }
        }
    } else if (timePeriod === "Custom Interval") {
        let dates = getDatesInInterval(startDate, endDate);
        array.length = dates.length;
        for (let i = 0; i < dates.length; i++) {
            array[i] = 0;
            for (let j = 0; j < sampleData.length; j++) {
                if (new Date((new Date(sampleData[j].date).setHours(0, 0, 0, 0))).getTime() === (dates[i].setHours(0, 0, 0, 0))) {
                    array[i] = array[i] + 1;
                }
            }
        } return array;
    }
    return array.reverse();
};

export { dateFormatter, dateFormatterShort, generateLabels, generateChartData, lastDayOfPreviousMonth, lastYear, secondToLastYear, getDatesInInterval };
