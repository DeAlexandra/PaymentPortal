import { ActionTypes } from "../actionTypes";
import DB_URL from "../../../utils/URLs";

export const getTransactionsRequest = () => {
    return {
        type: ActionTypes.GET_TRANSACTIONS_REQUEST
    };
};

export const getTransactionsSuccess = transactions => {
    return {
        type: ActionTypes.GET_TRANSACTIONS_SUCCESS,
        payload: transactions
    };
};

export const getTransactionsFailure = error => {
    return {
        type: ActionTypes.GET_TRANSACTIONS_FAILURE,
        payload: error
    };
};

export const getTransactions = () => {
    return async function (dispatch) {
        dispatch(getTransactionsRequest());
        try {
            const response = await fetch(`${DB_URL}/transactions`);
            const transactions = await response.json();
            dispatch(getTransactionsSuccess(transactions));
        } catch (err) {
            dispatch(getTransactionsFailure(err.message));
        }
    };
};

export const updateTransactionRequest = () => {
    return {
        type: ActionTypes.UPDATE_TRANSACTION_REQUEST
    };
};

export const updateTransactionSuccess = (transaction) => {
    return {
        type: ActionTypes.UPDATE_TRANSACTION_SUCCESS,
        payload: transaction
    };
};

export const updateTransactionFailure = (error) => {
    return {
        type: ActionTypes.UPDATE_TRANSACTION_FAILURE,
        payload: error
    };
};

export const patchTransaction = (transaction, id) => {
    return async function (dispatch) {
        dispatch(updateTransactionRequest());
        try {
            await fetch(`${DB_URL}/transactions/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transaction)
            });
            dispatch(updateTransactionSuccess(transaction));
        } catch (err) {
            dispatch(updateTransactionFailure(err.message));
        }
    };
};

export const selectedTransaction = (transaction) => {
    return {
        type: ActionTypes.SELECTED_TRANSACTION,
        payload: transaction
    };
};

export const removeSelectedTransaction = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_TRANSACTION,
    };
};

