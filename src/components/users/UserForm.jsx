import React, { useState, useContext, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ToastContext from "../../context/ToastContext";
import UserValidationSchema from '../../pages/users/UserValidationSchema';
import { reset } from '../../context/redux/actions';
import store from '../../context/redux/store';
import { fetchRequest } from '../../pages/fetchRequests';

export default function UserForm() {
    const [singleUser, setSingleUser] = useState([]);
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const { setToastState } = useContext(ToastContext);
    const navigate = useNavigate();
    const location = useLocation();

    const getUserId = () => {
        const pathArray = location.pathname.split("/");
        return pathArray[pathArray.length - 1];
    };

    const userId = getUserId();
    const url = `http://localhost:3004/users/${userId}`;

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        setIsLoading(true);
        await fetchRequest(url, successFetchCb, errorCb, "fail_fetch_user", "GET");
    };
    const updateUser = async (values) => {
        setIsLoading(true);
        await fetchRequest(url, successPatchCb, errorCb, "fail_edit_user", "PATCH", values);
    };
    const successFetchCb = (res) => {
        setSingleUser(res);
        setIsLoading(false);
    };
    const successPatchCb = () => {
        setIsLoading(false);
        setToastState({ message: "success_edit_user", severity: "success", open: true });
        store.dispatch(reset);
        navigate("/users");
    };
    const errorCb = (errorCode) => {
        setIsLoading(false);
        setToastState({ message: errorCode, severity: "error", open: true });
    };
    const cancelUpdateUser = () => {
        navigate(-1);
        store.dispatch(reset);
    };
    return (
        <><Typography variant="h3" component="h1" align="center">{ t("user_details") }</Typography>
            <Formik
                enableReinitialize={ true }
                initialValues={ singleUser }
                validationSchema={ UserValidationSchema }
                onSubmit={ (data, { setSubmitting }) => {
                    setSubmitting(true);
                    updateUser(data);
                    setSubmitting(false);
                } }>
                { ({ values, errors, touched, isSubmitting, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={ handleSubmit }>
                        <div style={ { marginTop: "10px" } }>
                            <label htmlFor="first_name">{ t("first_name") }</label></div>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="first_name"
                            name="first_name"
                            type="text"
                            onChange={ handleChange }
                            value={ values.first_name }
                            helperText={ Boolean(touched.first_name) && errors.first_name }
                            error={ Boolean(touched.first_name) && errors.first_name }
                            onBlur={ handleBlur }
                        />
                        <div style={ { marginTop: "10px" } }>
                            <label htmlFor="last_name">{ t("last_name") }</label></div>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="last_name"
                            name="last_name"
                            type="text"
                            onChange={ handleChange }
                            value={ values.last_name }
                            helperText={ Boolean(touched.last_name) && errors.last_name }
                            error={ Boolean(touched.last_name) && errors.last_name }
                            onBlur={ handleBlur }
                        />
                        <div style={ { marginTop: "10px" } }>
                            <label htmlFor="email">{ t("email") }</label></div>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="email"
                            name="email"
                            type="email"
                            onChange={ handleChange }
                            value={ values.email }
                            helperText={ Boolean(touched.email) && errors.email }
                            error={ Boolean(touched.email) && errors.email }
                            onBlur={ handleBlur }
                        />
                        <div style={ { marginTop: "10px" } }>
                            <label htmlFor="password">{ t("password") }</label></div>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="password"
                            name="password"
                            type="password"
                            onChange={ handleChange }
                            value={ values.password }
                            helperText={ Boolean(touched.password) && errors.password }
                            error={ Boolean(touched.password) && errors.password }
                            onBlur={ handleBlur }
                        />
                        <div style={ { marginTop: "10px" } }>
                            <label htmlFor="profile_picture">{ t("profile_picture") }</label></div>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="profile_picture"
                            name="profile_picture"
                            type="profile_picture"
                            onChange={ handleChange }
                            value={ values.profile_picture }
                            helperText={ Boolean(touched.profile_picture) && errors.profile_picture }
                            error={ Boolean(touched.profile_picture) && errors.profile_picture }
                            onBlur={ handleBlur }
                        />
                        <div style={ { display: "flex", justifyContent: "center", marginTop: "10px" } }>
                            <Button sx={ { flex: 2 } } variant="contained" color="success" type="submit" disabled={ isSubmitting }>{ t("submit") }</Button>
                            <Button sx={ { flex: 2 } } variant="contained" color="warning" type="button" disabled={ isSubmitting }
                                onClick={ cancelUpdateUser }> { t("cancel") }</Button>
                        </div>
                    </Form>
                ) }
            </Formik>
        </>
    );
}