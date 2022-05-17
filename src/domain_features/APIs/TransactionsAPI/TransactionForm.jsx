import React from 'react';
import { Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import TransactionValidationSchema from '../../models/TransactionValidationSchema';
import { reset } from '../../../shared/context/redux/actions';
import store from '../../../shared/context/redux/store';
import { useGetCall, useLocationId, usePatchCall } from '../../../shared/custom_hooks/index';
import { DrawerTitle, DrawerForm, InputField, FormButtons, SimpleCard } from "../../../shared/components/index";
import DB_URL from '../../../shared/utils/URLs';

export default function TransactionForm() {
    const navigate = useNavigate();
    const transactionId = useLocationId();
    const url = `${DB_URL}/transactions/${transactionId}`;
    const { data: singleTransaction } = useGetCall(url, "fail_fetch_transaction");
    const { updateEntry: updateTransaction } = usePatchCall(url, "fail_patch_transaction", "transactions");

    const cancelUpdateTransaction = () => {
        navigate(-1);
        store.dispatch(reset);
    };
    return (
        <><DrawerTitle title={ "transaction_details" } />
            <DrawerForm initialValues={ singleTransaction } validationSchema={ TransactionValidationSchema } updateEntry={ updateTransaction }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        <div style={ { display: "flex", flexDirection: "column", margin: " 0 auto", width: "30vw", minWidth: "300px" } }>
                            <InputField fieldName={ "receiver" } displayName={ "shop" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />
                            <InputField fieldName={ "price" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />
                            <InputField fieldName={ "VAT" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />
                            <InputField fieldName={ "total" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } disabled={ true } />
                            <FormButtons isSubmitting={ isSubmitting } cancelUpdate={ cancelUpdateTransaction } />
                        </div>
                        <div style={ { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } }>
                            { values.products && (values.products).map(product =>
                                <SimpleCard product={ product } />
                            ) }
                        </div>
                    </Form>
                ) }
            </DrawerForm>
        </>
    );
}
