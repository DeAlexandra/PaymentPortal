import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Form } from 'formik';
import ToastContext from '../../context/ToastContext';
import { TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import { getTotalPrice } from './Transactions';
import { useTranslation } from 'react-i18next';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function TransactionDetails() {

    return (
        <div style={ { display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100vh", marginLeft: "90px", marginTop: "75px", paddingTop: "10px", width: "80vw", margin: " 75px auto" } }>
            <Typography variant="h3" component="h1" align="center">{ ("transaction_details") }</Typography>

        </div>
    );
}