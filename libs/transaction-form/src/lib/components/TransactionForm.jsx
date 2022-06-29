import { Form } from 'formik';
import { useSelector } from 'react-redux';
import { DrawerTitle, DrawerForm, FormButtons, SimpleCard } from "@myorg/shared/components";
import { transactionFieldArray } from "@my-org/shared/utils";
import { TransactionValidationSchema } from '../models/TransactionValidationSchema';
import { InputField } from './FormInputField';
import { useFetchTransaction } from '../API/useFetchTransaction';
import { useUpdateTransaction } from "../API/useUpdateTransaction";

function TransactionForm() {
    const { handleUpdateTransaction } = useUpdateTransaction();
    const singleTransaction = useSelector((state) => state.transactionDetails);
    const open = useSelector((state) => state.drawerReducer.open);
    const selectedTransactionDetails = singleTransaction.transaction !== undefined && singleTransaction.transaction;
    useFetchTransaction();
    useUpdateTransaction();

    return (
        <><DrawerTitle title={ "transaction_details" } />
            <DrawerForm initialValues={ selectedTransactionDetails } validationSchema={ TransactionValidationSchema } updateEntry={ handleUpdateTransaction }>
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

export { TransactionForm };