import React, { useState, useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { TextField, Typography } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import TransactionValidationSchema from '../../pages/transactions/TransactionValidationSchema';
import ToastContext from '../../context/ToastContext';
import { getTotalPrice } from '../../pages/transactions/Transactions';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { reset } from '../../context/redux/actions';
import store from '../../context/redux/store';
import { fetchRequest } from '../../pages/fetchRequests';
export default function TransactionForm() {
    const [singleTransaction, setSingleTransaction] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { setToastState } = useContext(ToastContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const getTransactionId = () => {
        let pathArray = (location.pathname).split("/");
        return pathArray[pathArray.length - 1];
    };

    const transactionId = getTransactionId();
    const url = `http://localhost:3004/transactions/${transactionId}`;

    useEffect(() => {
        getTransaction();
    }, []);

    const getTransaction = async () => {
        setIsLoading(true);
        await fetchRequest(url, successFetchCb, errorCb, "fail_fetch_transaction", "GET");
    };
    const updateTransaction = async (values) => {
        setIsLoading(true);
        await fetchRequest(url, successPatchCb, errorCb, "fail_edit_transaction", "PATCH", values);
    };
    const successFetchCb = (res) => {
        setSingleTransaction(res);
        setIsLoading(false);
    };
    const successPatchCb = () => {
        setIsLoading(false);
        setToastState({ message: "success_edit_transaction", severity: "success", open: true });
        store.dispatch(reset);
        navigate("/transactions");
    };
    const errorCb = (errorCode) => {
        setIsLoading(false);
        setToastState({ message: errorCode, severity: "error", open: true });
    };
    const cancelUpdateTransaction = () => {
        navigate(-1);
        store.dispatch(reset);
    };
    return (
        <><Typography variant="h3" component="h1" align="center">{ t("transaction_details") }</Typography>
            <Formik
                enableReinitialize={ true }
                initialValues={ singleTransaction }
                validationSchema={ TransactionValidationSchema }
                onSubmit={ (data, { setSubmitting }) => {
                    setSubmitting(true);
                    updateTransaction(data);
                    setSubmitting(false);
                } }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (

                    <Form onSubmit={ handleSubmit }>
                        <div style={ { display: "flex", flexDirection: "column", margin: " 0 auto", width: "30vw", minWidth: "300px" } }>
                            <div style={ { marginTop: "10px" } }>
                                <label htmlFor="receiver">{ t("shop") }</label></div>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="receiver"
                                name="receiver"
                                type="text"
                                onChange={ handleChange }
                                value={ values.receiver }
                                helperText={ Boolean(touched.receiver) && errors.receiver }
                                error={ Boolean(touched.receiver) && errors.receiver }
                                onBlur={ handleBlur }
                            />
                            <div style={ { marginTop: "10px" } }>
                                <label htmlFor="price">{ t("price") }</label></div>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="price"
                                name="price"
                                type="price"
                                onChange={ handleChange }
                                value={ values.price }
                                helperText={ Boolean(touched.price) && errors.price }
                                error={ Boolean(touched.price) && errors.price }
                                onBlur={ handleBlur }
                            />
                            <div style={ { marginTop: "10px" } }>
                                <label htmlFor="VAT">{ t("VAT") }</label></div>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="VAT"
                                name="VAT"
                                type="VAT"
                                onChange={ handleChange }
                                value={ values.VAT }
                                helperText={ Boolean(touched.VAT) && errors.VAT }
                                error={ Boolean(touched.VAT) && errors.VAT }
                                onBlur={ handleBlur }
                            />
                            <div style={ { marginTop: "10px" } }>
                                <label htmlFor="total_price">{ t("total") }</label></div>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="total_price"
                                name="total_price"
                                type="total_price"
                                onChange={ handleChange }
                                value={ values && getTotalPrice(values.price, values.VAT) }
                                onBlur={ handleBlur }
                                disabled
                            />
                            <div style={ { display: "flex", justifyContent: "center", marginTop: "10px" } }>
                                <Button sx={ { flex: 2 } } variant="contained" color="success" type="submit" disabled={ isSubmitting }>{ t("submit") }</Button>
                                <Button sx={ { flex: 2 } } variant="contained" color="warning" type="button" disabled={ isSubmitting } onClick={ cancelUpdateTransaction }> { t("cancel") }</Button>
                            </div>
                        </div>
                        <div style={ { display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } }>
                            { values.products && (values.products).map(product =>
                                <Card key={ product.id } sx={ { width: 275, margin: "50px 10px 10px" } }>
                                    <CardContent>
                                        <Typography sx={ { fontSize: 14 } } gutterBottom>
                                            { t("product") }
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            { product.description }
                                        </Typography>
                                        <Typography sx={ { mb: 1.5 } } >
                                            { t("amount") }: { product.amount }
                                        </Typography>
                                        <Typography sx={ { mb: 1.5 } } >
                                            { t("price") }: { product.price }
                                        </Typography>
                                        <Typography sx={ { mb: 1.5 } } >
                                            { t("VAT") }: { product.VAT }
                                        </Typography>
                                        <Typography sx={ { mb: 1.5 } } >
                                            { t("total") }: { product.total_price }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ) }
                        </div>
                    </Form>
                ) }
            </Formik>
        </>
    );
}
