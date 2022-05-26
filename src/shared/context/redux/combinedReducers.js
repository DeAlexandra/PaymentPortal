import { combineReducers } from "redux";
import { transactionReducer, selectedTransactionReducer } from "./transactionsReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
    allTransactions: transactionReducer,
    transaction: selectedTransactionReducer,
    drawerReducer: drawerReducer
});
export default rootReducer;