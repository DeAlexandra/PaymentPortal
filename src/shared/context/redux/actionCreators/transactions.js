import { ActionTypes } from "../actionTypes";
import { makeActionCreator } from "./actionCreatorFunction";

export const getTransactionsAction = makeActionCreator(ActionTypes.GET_TRANSACTIONS);
export const getTransactionsSuccess = makeActionCreator(ActionTypes.GET_TRANSACTIONS_SUCCESS, "payload");
export const getTransactionsFailure = makeActionCreator(ActionTypes.GET_TRANSACTIONS_FAILURE, "payload");

export const updateTransactionAction = makeActionCreator(ActionTypes.UPDATE_TRANSACTION);
export const updateTransactionSuccess = makeActionCreator(ActionTypes.UPDATE_TRANSACTION_SUCCESS);
export const updateTransactionFailure = makeActionCreator(ActionTypes.UPDATE_TRANSACTION_FAILURE, "payload");

export const getTransactionDetailsAction = makeActionCreator(ActionTypes.GET_TRANSACTION_DETAILS);
export const getTransactionDetailsSuccess = makeActionCreator(ActionTypes.GET_TRANSACTION_DETAILS_SUCCESS, "payload");
export const getTransactionDetailsFailure = makeActionCreator(ActionTypes.GET_TRANSACTION_DETAILS_FAILURE, "payload");
export const removeTransactionDetails = makeActionCreator(ActionTypes.REMOVE_TRANSACTION_DETAILS, "payload");
