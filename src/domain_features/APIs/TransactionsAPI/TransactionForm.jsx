import React, { useEffect } from 'react';
import { Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useLocationId, useUpdateCallRedux, } from '../../../shared/custom_hooks/index';
import { DrawerTitle, DrawerForm, FormButtons, SimpleCard } from "../../../shared/components/index";
import { transactionFieldArray } from "../../../shared/components/form/userFormFieldsArray";
import TransactionValidationSchema from '../../models/TransactionValidationSchema';
import InputField from './FormInputField';
import DB_URL from '../../../shared/utils/URLs';
import {
    selectedTransaction,
    updateTransactionAction,
    updateTransactionFailure,
    updateTransactionSuccess,
    removeSelectedTransaction
} from '../../../shared/context/redux/actionCreators/transactions';

export default function TransactionForm() {
    const dispatch = useDispatch();
    const transactionId = useLocationId();
    const url = `${DB_URL}/transactions/${transactionId}`;
    const { updateEntry } = useUpdateCallRedux(url, "fail_update_transaction", "success_edit_transaction", "transactions", updateTransactionAction, updateTransactionSuccess, updateTransactionFailure);
    const singleTransaction = useSelector((state) => state.allTransactions.transactions.find(transaction => transaction.id === transactionId));
    const open = useSelector((state) => state.drawerReducer.open);

    useEffect(() => {
        if (transactionId && transactionId !== undefined) dispatch(selectedTransaction(singleTransaction));
        return () => {
            dispatch(removeSelectedTransaction());
        };
    }, []);

    const handleUpdateTransaction = (transaction) => {
        updateEntry(transaction);
    };

    return (
        <><DrawerTitle title={ "transaction_details" } />
            <DrawerForm initialValues={ singleTransaction } validationSchema={ TransactionValidationSchema } updateEntry={ handleUpdateTransaction }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        <div style={ { display: "flex", flexDirection: "column", margin: " 0 auto", width: "30vw", minWidth: "300px" } }>
                            { open === true && transactionFieldArray.map((elem) => {
                                return <InputField key={ elem } fieldName={ elem } displayName={ elem !== "receiver" ? elem : "shop" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />;
                            }) }
                            <FormButtons isSubmitting={ isSubmitting } />
                        </div>
                        <div style={ { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } }>
                            { open === true && values.products && (values.products).map(product =>
                                <SimpleCard product={ product } />
                            ) }
                        </div>
                    </Form>
                ) }
            </DrawerForm>
        </>
    );
}
