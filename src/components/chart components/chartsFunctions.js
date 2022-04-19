const sortDates = (chart) => {
    chart.sort((date1, date2) => {
        let dateA = new Date(date1.date);
        let dateB = new Date(date2.date);
        return dateA - dateB;
    });
};
const dateFromThePast = (daysInThePast, date = new Date()) => {
    let specificDate = date; //last day of month
    let dateInThePast = new Date((new Date(specificDate)).valueOf() - 1000 * 60 * 60 * 24 * daysInThePast);
    return dateInThePast.toLocaleString().split(',')[0].replace('/', '.').replace('/', '.');
};

const daysLabelDateTransformation = (date) => {
    let day = date.toLocaleDateString('en-GB', { day: 'numeric' });
    return `${day} ${date.toLocaleString('en-GB', { month: 'short' })} ${date.getFullYear()}`;
};

const lastDayOfPreviousMonth = new Date(new Date().setDate(0));

const getNumberOfDaysOfThePreviousMonth = () => {
    const presentDate = new Date();
    const last = (new Date(presentDate.setDate(0))).setHours(23, 59, 59, 59); //last day of the previous month
    const first = (new Date(presentDate.setDate(1))).setHours(0, 0, 0, 0); //first day of the previous month
    const getNumberOfDays = Math.round((last - first) / (1000 * 60 * 60 * 24));
    return getNumberOfDays;
};

const generateLabels = (timePeriod) => {
    let array = [];
    if (timePeriod === "Last 10 Days") {
        for (let i = 0; i < 10; i++) {
            array[i] = daysLabelDateTransformation(new Date(dateFromThePast(i)));
        }
    } else if (timePeriod === "Last Month") {
        for (let i = getNumberOfDaysOfThePreviousMonth(); i > 0; i--) {
            array[getNumberOfDaysOfThePreviousMonth() - i] = i;
        }
    } else if (timePeriod === "Last Year") {

    } else if (timePeriod === "Last Two Years") {

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

const generateChartData = (timePeriod, sampleData) => {
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
    else if (timePeriod === "Last Year") number = 365;
    else if (timePeriod === "Last Two Years") number = 365 * 2;

    return array.reverse();
};

export { sortDates, generateLabels, generateChartData, lastDayOfPreviousMonth };
