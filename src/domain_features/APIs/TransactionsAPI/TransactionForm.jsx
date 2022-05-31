import React, { useEffect, useContext } from 'react';
import { Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import store from '../../../shared/context/redux/store';
import { useGetCall, useLocationId, usePatchCall } from '../../../shared/custom_hooks/index';
import { DrawerTitle, DrawerForm, FormButtons, SimpleCard } from "../../../shared/components/index";
import { transactionFieldArray } from "../../../shared/components/form/userFormFieldsArray";
import TransactionValidationSchema from '../../models/TransactionValidationSchema';
import InputField from './FormInputField';
import DB_URL from '../../../shared/utils/URLs';
import { selectedTransaction } from '../../../shared/context/redux/actionCreators/transactions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeSelectedTransaction } from '../../../shared/context/redux/actionCreators/transactions';
import { setDrawerClose } from '../../../shared/context/redux/actionCreators/drawerActionCreator';
import { patchTransaction } from '../../../shared/context/redux/actionCreators/transactions';
import ToastContext from '../../../shared/context/ToastContext';

export default function TransactionForm() {
    const { toastState, setToastState } = useContext(ToastContext);
    const navigate = useNavigate();
    const transactionId = useLocationId();
    // const url = `${DB_URL}/transactions/${transactionId}`;
    // const { data: singleTransaction } = useGetCall(url, "fail_fetch_transaction");
    // const { updateEntry: updateTransaction } = usePatchCall(url, "fail_patch_transaction", "transactions");

    const dispatch = useDispatch();
    const selectedTrans = useSelector((state) => state.allTransactions.transactions.find(transaction => transaction.id === transactionId));
    const open = useSelector((state) => state.drawerReducer.open);
    const updateStatus = useSelector((state) => state.updateTransaction.error);

    useEffect(() => {
        if (transactionId && transactionId !== undefined) dispatch(selectedTransaction(selectedTrans));
        return () => {
            dispatch(removeSelectedTransaction());
        };
    }, []);

    const updateTransaction = (transaction) => {
        dispatch(patchTransaction(transaction, transactionId));
        setCloseDrawerAndNavigateBack();
        setToastState(
            updateStatus === null ?
                {
                    message: "success_edit_transaction",
                    severity: "success",
                    open: true
                }
                :
                {
                    message: "fail_edit_transaction",
                    severity: "error",
                    open: true
                }
        );

    };
    const setCloseDrawerAndNavigateBack = () => {
        navigate("/transactions");
        store.dispatch(setDrawerClose());
    };
    return (
        <><DrawerTitle title={ "transaction_details" } />
            <DrawerForm initialValues={ selectedTrans } validationSchema={ TransactionValidationSchema } updateEntry={ updateTransaction }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        <div style={ { display: "flex", flexDirection: "column", margin: " 0 auto", width: "30vw", minWidth: "300px" } }>
                            { open === true && transactionFieldArray.map((elem) => {
                                return <InputField key={ elem } fieldName={ elem } displayName={ elem !== "receiver" ? elem : "shop" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />;
                            }) }
                            <FormButtons isSubmitting={ isSubmitting } cancelUpdate={ setCloseDrawerAndNavigateBack } />
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
