import { ActionTypes } from "../actionTypes";
import { makeActionCreator } from "./actionCreatorFunction";

export const getTransactionsAction = makeActionCreator(ActionTypes.GET_TRANSACTIONS);
export const getTransactionsSuccess = makeActionCreator(ActionTypes.GET_TRANSACTIONS_SUCCESS, "payload");
export const getTransactionsFailure = makeActionCreator(ActionTypes.GET_TRANSACTIONS_FAILURE, "payload");

export const updateTransactionAction = makeActionCreator(ActionTypes.UPDATE_TRANSACTION);
export const updateTransactionSuccess = makeActionCreator(ActionTypes.UPDATE_TRANSACTION_SUCCESS);
export const updateTransactionFailure = makeActionCreator(ActionTypes.UPDATE_TRANSACTION_FAILURE, "payload");

export const selectedTransaction = makeActionCreator(ActionTypes.SELECTED_TRANSACTION, "payload");
export const removeSelectedTransaction = makeActionCreator(ActionTypes.REMOVE_SELECTED_TRANSACTION, "payload");
