const randomNumberGenerator = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

export { randomNumberGenerator };