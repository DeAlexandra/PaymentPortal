const fetchRequest = async (url, successCb, errorCb, errorCode, reqMethod, values = null) => {
    let options = {
        method: reqMethod,
        headers: { "Content-Type": "application/json" }
    };
    if (reqMethod !== "GET") {
        options.body = JSON.stringify(values);
    }
    try {
        const response = await fetch(url, options);
        const res = await response.json();
        reqMethod === "GET" ? successCb(res) : successCb();
    } catch (err) {
        errorCb(errorCode);
    }
};

export { fetchRequest };