import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export default function SimpleCard({ product }) {
    const { t } = useTranslation();
    return (
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
    );
}
