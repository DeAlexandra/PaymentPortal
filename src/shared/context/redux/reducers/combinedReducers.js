import { combineReducers } from "redux";
import { transactionReducer, updateTransactionReducer, transactionDetailsReducer } from "./transactionsReducer";
import { userReducer, updateUserReducer, userDetailsReducer } from "./usersReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
    allTransactions: transactionReducer,
    transactionDetails: transactionDetailsReducer,
    updateTransaction: updateTransactionReducer,
    allUsers: userReducer,
    userDetails: userDetailsReducer,
    updateUser: updateUserReducer,
    drawerReducer: drawerReducer
});
export default rootReducer;