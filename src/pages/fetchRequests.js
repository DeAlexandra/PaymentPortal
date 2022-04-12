import store from "../context/redux/store";
import { reset } from "../context/redux/actions";

const fetchRequest = async (url, successCb, errorCb, errorCode) => {
    try {
        const response = await fetch(url);
        const res = await response.json();
        successCb(res);
    } catch (err) {
        errorCb(errorCode);
    }
};
const patchRequest = async (url, values, successCb, errorCb, errorCode) => {
    try {
        await fetch(url, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        });
        successCb();
        store.dispatch(reset);
    } catch (err) {
        errorCb(errorCode);
    }
};

export { fetchRequest, patchRequest };
