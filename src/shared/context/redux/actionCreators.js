import { ActionTypes } from "./actionTypes";
import DB_URL from "../../utils/URLs";

export const getTransactions = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${DB_URL}/transactions`);
            const res = await response.json();
            dispatch({ type: ActionTypes.GET_TRANSACTIONS, payload: res });
        } catch (err) {
            console.log(err);
        }
    };
};

export const getTransaction = (id) => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${DB_URL}/transactions/${id}`);
            const res = await response.json();
            dispatch({ type: ActionTypes.SELECTED_TRANSACTION, payload: res });
        } catch (err) {
            console.log(err);
        }
    };
};

export const setTransactions = (transactions) => {
    return {
        type: ActionTypes.SET_TRANSACTIONS,
        payload: transactions

    };
};

export const selectedTransaction = (transaction) => {
    return {
        type: ActionTypes.SELECTED_TRANSACTION,
        payload: transaction

    };
};

export const setDrawerOpen = () => {
    return function (dispatch) {
        dispatch({
            type: ActionTypes.OPEN_DRAWER
        });
    };
};

export const setDrawerClose = () => {
    return function (dispatch) {
        dispatch({
            type: ActionTypes.RESET_DRAWER
        });
    };
};