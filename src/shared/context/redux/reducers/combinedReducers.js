import { combineReducers } from "redux";
import { transactionReducer, selectedTransactionReducer, updateTransactionReducer } from "./transactionsReducer";
import { userReducer, selectedUserReducer, updateUserReducer } from "./usersReducer";
import drawerReducer from "./drawerReducer";

const rootReducer = combineReducers({
    allTransactions: transactionReducer,
    selectedTransaction: selectedTransactionReducer,
    updateTransaction: updateTransactionReducer,
    allUsers: userReducer,
    selectedUser: selectedUserReducer,
    updateUser: updateUserReducer,
    drawerReducer: drawerReducer
});
export default rootReducer;