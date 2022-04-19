const generate = require('./generator');
const fs = require('fs');

const dateFrom = (timePeriod) => {
    if (timePeriod === "Last 10 Days") return generate.dateFromThePast(Math.floor(Math.random() * 10));
    else if (timePeriod === "Last Month") return generate.dateFromThePast(Math.floor(Math.random() * (50 - 28 + 1) + 28));
    else if (timePeriod === "Last Year") return generate.dateFromThePast(Math.floor(Math.random() * (365 - 60 + 1) + 60));
    else if (timePeriod === "Last Two Years") return generate.dateFromThePast(Math.floor(Math.random() * (730 - 365 + 1) + 365));
};
const LAST_TEN_DAYS = "Last 10 Days";
const LAST_MONTH = "Last Month";
const LAST_YEAR = "Last Year";
const LAST_TWO_YEARS = "Last Two Years";


const TRANSACTION_DATE = [dateFrom(LAST_TEN_DAYS), dateFrom(LAST_TEN_DAYS), dateFrom(LAST_TEN_DAYS), dateFrom(LAST_TEN_DAYS), dateFrom(LAST_TEN_DAYS), dateFrom(LAST_MONTH), dateFrom(LAST_MONTH), dateFrom(LAST_MONTH), dateFrom(LAST_MONTH), dateFrom(LAST_MONTH), dateFrom(LAST_YEAR), dateFrom(LAST_YEAR), dateFrom(LAST_YEAR), dateFrom(LAST_YEAR), dateFrom(LAST_YEAR), dateFrom(LAST_TWO_YEARS), dateFrom(LAST_TWO_YEARS), dateFrom(LAST_TWO_YEARS), dateFrom(LAST_TWO_YEARS), dateFrom(LAST_TWO_YEARS)];

let transactionTable = {
    "transactions":
        generate.addMultiple("transactions", 20, TRANSACTION_DATE),
    "users":
        generate.addMultiple("users", 20)
};


const jsonString = JSON.stringify(transactionTable);

fs.writeFile('./db_meow.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
    }
});
