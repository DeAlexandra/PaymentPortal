import { DB_URL } from '@my-org/shared/utils';
import { useUpdateCallRedux, updateTransactionAction, updateTransactionSuccess, updateTransactionFailure, useLocationId } from "@myorg/state";

const useUpdateTransaction = () => {
    const transactionId = useLocationId();
    const url = `${DB_URL}/transactions/${transactionId}`;
    const { updateEntry } = useUpdateCallRedux(url, "fail_edit_transaction", "success_edit_transaction", "transactions", updateTransactionAction, updateTransactionSuccess, updateTransactionFailure);
    const handleUpdateTransaction = (transaction) => {
        updateEntry(transaction);
    };
    return { handleUpdateTransaction };
};

export { useUpdateTransaction };
