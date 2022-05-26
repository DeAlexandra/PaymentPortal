import { ActionTypes } from "./actionTypes";

const initialState = {
    loading: false,
    transactions: [],
    errorMessage: null
};

export const transactionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TRANSACTIONS:
            return { ...state, transactions: payload, };
        case ActionTypes.GET_TRANSACTIONS:
            return { ...state, transactions: payload, loading: true };
        default: return state;
    };
};

export const selectedTransactionReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_TRANSACTION:
            return { ...state, ...payload };
        default:
            return state;
    }
};