const lastDayOfPreviousMonth = new Date(new Date().setDate(0));
const lastYear = new Date().getFullYear() - 1;
const secondToLastYear = lastYear - 1;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const LAST_TEN_DAYS = "Last 10 Days";
const LAST_MONTH = "Last Month";
const LAST_YEAR = "Last Year";
const LAST_TWO_YEARS = "Two Years Ago";
const CUSTOM_INTERVAL = "Custom Interval";


export { lastDayOfPreviousMonth, lastYear, secondToLastYear, monthNames, LAST_TEN_DAYS, LAST_MONTH, LAST_YEAR, LAST_TWO_YEARS, CUSTOM_INTERVAL };