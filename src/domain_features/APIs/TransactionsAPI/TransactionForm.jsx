import React, { useEffect } from 'react';
import { Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { reset } from '../../../shared/context/redux/actions';
import store from '../../../shared/context/redux/store';
import { useGetCall, useLocationId, usePatchCall } from '../../../shared/custom_hooks/index';
import { DrawerTitle, DrawerForm, FormButtons, SimpleCard } from "../../../shared/components/index";
import { transactionFieldArray } from "../../../shared/components/form/userFormFieldsArray";
import TransactionValidationSchema from '../../models/TransactionValidationSchema';
import InputField from './FormInputField';
import DB_URL from '../../../shared/utils/URLs';
import { selectedTransaction } from '../../../shared/context/redux/actionCreators';
import { getTransaction } from '../../../shared/context/redux/actionCreators';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setDrawerClose } from '../../../shared/context/redux/actionCreators';

export default function TransactionForm() {
    const navigate = useNavigate();
    const transactionId = useLocationId();
    const { transId } = useParams();
    const url = `${DB_URL}/transactions/${transactionId}`;
    const { data: singleTransaction } = useGetCall(url, "fail_fetch_transaction");
    const { updateEntry: updateTransaction } = usePatchCall(url, "fail_patch_transaction", "transactions");
    // const dispatch = useDispatch();
    // const selectedTrans = useSelector((state) => state.transaction);
    // console.log(selectedTrans);

    // useEffect(() => {
    //     dispatch(getTransaction(transId));
    // }, []);

    // console.log(selectedTrans);
    const cancelUpdateTransaction = () => {
        navigate(-1);
        store.dispatch(setDrawerClose());
    };
    return (
        <><DrawerTitle title={ "transaction_details" } />
            <DrawerForm initialValues={ singleTransaction } validationSchema={ TransactionValidationSchema } updateEntry={ updateTransaction }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        <div style={ { display: "flex", flexDirection: "column", margin: " 0 auto", width: "30vw", minWidth: "300px" } }>
                            { transactionFieldArray.map((elem) => {
                                return <InputField key={ elem } fieldName={ elem } displayName={ elem !== "receiver" ? elem : "shop" } handleChange={ handleChange } handleBlur={ handleBlur } values={ values } touched={ touched } errors={ errors } />;
                            }) }
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
