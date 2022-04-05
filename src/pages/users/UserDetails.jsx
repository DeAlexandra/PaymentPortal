import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import ToastContext from '../../context/ToastContext';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@material-ui/core';
import UserValidationSchema from './UserValidationSchema';

export default function UserDetails() {

    const [singleUser, setSingleUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { setToastState } = useContext(ToastContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`http://localhost:3004/users/${id}`);
            const singleUser = await response.json();
            setSingleUser(singleUser);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setToastState({ message: "fail_fetch_user", severity: "error", open: true });
        }
    };

    const updateUser = async (values) => {
        try {
            await fetch(`http://localhost:3004/users/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            });
            setIsLoading(false);
            setToastState({ message: "success_edit_user", severity: "success", open: true });
            navigate("/users");
        } catch (err) {
            setIsLoading(false);
            setToastState({ message: "fail_edit_user", severity: "error", open: true });
        }
    };

    const cancelUpdateUser = () => {
        navigate(-1);
    };

    // const UserValidationSchema = Yup.object({
    //     first_name: Yup.string()
    //         .min(2, t("short_value"))
    //         .max(50, t("long_value"))
    //         .required(t("required")),
    //     last_name: Yup.string()
    //         .min(2, t("short_value"))
    //         .max(50, t("long_value"))
    //         .required(t("required")),
    //     email: Yup.string()
    //         .email("Invalid email")
    //         .required(t("required")),
    //     password: Yup.string()
    //         .min(6, t("short_value"))
    //         .max(15, t("long_value"))
    //         .required(t("required")),
    //     profile_picture: Yup.string()
    //         .required(t("required"))
    // });


    return (
        <> <div style={ { display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100vh", marginLeft: "90px", marginTop: "75px", paddingTop: "10px", width: "40vw", margin: " 75px auto" } }>
            <Typography variant="h3" component="h1" align="center">{ t("user_details") }</Typography>
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
                            <Button sx={ { flex: 2 } } variant="contained" color="warning" type="button" disabled={ isSubmitting } onClick={ cancelUpdateUser }> { t("cancel") }</Button>
                        </div>
                    </Form>
                ) }
            </Formik>
        </div>
        </>
    );
}
