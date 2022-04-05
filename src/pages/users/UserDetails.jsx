import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import ToastContext from '../../context/ToastContext';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@material-ui/core';

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
            navigate(-1);
        } catch (err) {
            setIsLoading(false);
            setToastState({ message: "fail_edit_user", severity: "error", open: true });
        }
    };

    const cancelUpdateUser = () => {
        navigate("/users");
    };

    return (
        <> <div style={ { display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100vh", marginLeft: "90px", marginTop: "75px", paddingTop: "10px", width: "40vw", margin: " 75px auto" } }>
            <Typography variant="h3" component="h1" align="center">{ t("user_details") }</Typography>
            <Formik enableReinitialize={ true } initialValues={ singleUser } onSubmit={ (data, { setSubmitting }) => {
                setSubmitting(true);
                updateUser(data);
                setSubmitting(false);
            } }>
                { ({ values, isSubmitting, handleChange, handleSubmit }) => (
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
