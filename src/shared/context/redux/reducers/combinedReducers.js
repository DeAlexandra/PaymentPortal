import { combineReducers } from "redux";
import { transactionReducer, selectedTransactionReducer, updateTransactionReducer } from "./transactionsReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
    allTransactions: transactionReducer,
    selectedTransaction: selectedTransactionReducer,
    updateTransaction: updateTransactionReducer,
    drawerReducer: drawerReducer
});
export default rootReducer;