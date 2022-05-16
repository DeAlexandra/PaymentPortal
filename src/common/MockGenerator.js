const faker = require('@faker-js/faker');
const CATEGORY = ["expenses", "income"];

const randomNumberGenerator = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

class Generator {
    addProduct = () => {
        return {
            "id": faker.default.datatype.uuid(),
            "description": faker.default.commerce.productName(),
            "amount": faker.default.datatype.number(100),
            "price": faker.default.commerce.price(100, 200, 2),
            "VAT": faker.default.datatype.number(30),
            "total_price": 0
        };
    };

    addTransaction = (date) => {
        return {
            "id": faker.default.datatype.uuid(),
            "date": date,
            "category": randomNumberGenerator(CATEGORY),
            "receiver": faker.default.company.companyName(),
            "price": faker.default.commerce.price(100, 200, 2),
            "VAT": faker.default.datatype.number(30),
            "total_price": 0,
            "products": []
        };
    };

    addUser = () => {
        return {
            "first_name": faker.default.name.firstName(),
            "last_name": faker.default.name.lastName(),
            "id": faker.default.datatype.uuid(),
            "email": faker.default.internet.email(),
            "password": faker.default.internet.password(),
            "profile_picture": faker.default.internet.avatar(),
            "role": faker.default.name.jobTitle(),
            "permissions": faker.default.name.jobDescriptor()
        };
    };
    addMultiple = (type, number, date = null) => {
        let array = [];
        if (type.toLowerCase() === "users") for (let i = 0; i < number; i++) array[i] = this.addUser();
        else if (type.toLowerCase() === "products") for (let i = 0; i < number; i++) array[i] = this.addProduct();
        else if (type.toLowerCase() === "transactions" && date !== null) for (let i = 0; i < date.length; i++) {
            array[i] = this.addTransaction(date[i]);
            for (let j = 0; j < (parseInt((Math.random() * 5 + 1))); j++) {
                array[i].products[j] = this.addProduct();
            }
        }
        return array;
    };

    dateFromThePast = (daysInThePast) => {
        return new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * daysInThePast).toLocaleString().split(',')[0].replace('/', '.').replace('/', '.');
    };
}
module.exports = new Generator();
