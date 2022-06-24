const getTotalPrice = (price, vat) => {
    let priceInt = parseInt(price);
    let vatValue = (vat / 100) * parseInt(price);
    return (vatValue + priceInt).toFixed(2);
};

export { getTotalPrice };