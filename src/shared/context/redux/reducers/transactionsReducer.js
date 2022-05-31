import { ActionTypes } from "../actionTypes";

const initialState = {
    loading: false,
    transactions: [],
    error: null
};
const initialUpdateValues = {
    loading: false,
    transaction: {},
    error: null
};

export const transactionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_TRANSACTIONS_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.GET_TRANSACTIONS_SUCCESS:
            return { ...state, transactions: payload, loading: false, error: null };
        case ActionTypes.GET_TRANSACTIONS_FAILURE:
            return { ...state, loading: false, transactions: [], error: payload };
        default: return state;
    };
};

export const selectedTransactionReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_TRANSACTION:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_TRANSACTION:
            return {};
        default:
            return state;
    }
};

export const updateTransactionReducer = (state = initialUpdateValues, { type, payload }) => {
    switch (type) {
        case ActionTypes.UPDATE_TRANSACTION_REQUEST:
            return {
                ...state, loading: true
            };
        case ActionTypes.UPDATE_TRANSACTION_SUCCESS:
            return { ...state, transaction: payload, loading: false };
        case ActionTypes.UPDATE_TRANSACTION_FAILURE:
            return { ...state, error: payload, loading: false };
        default:
            return state;

    }
};