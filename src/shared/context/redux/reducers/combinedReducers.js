import { combineReducers } from "redux";
import { transactionReducer, updateTransactionReducer, transactionDetailsReducer } from "./transactionsReducer";
import { userReducer, selectedUserReducer, updateUserReducer } from "./usersReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
    allTransactions: transactionReducer,
    transactionDetails: transactionDetailsReducer,
    updateTransaction: updateTransactionReducer,
    allUsers: userReducer,
    selectedUser: selectedUserReducer,
    updateUser: updateUserReducer,
    drawerReducer: drawerReducer
});
export default rootReducer;