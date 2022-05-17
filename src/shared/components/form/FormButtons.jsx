import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function FormButtons({ isSubmitting, cancelUpdate }) {
    const { t } = useTranslation();
    return (
        <div style={ { display: "flex", justifyContent: "center", marginTop: "10px" } }>
            <Button sx={ { flex: 2 } } variant="contained" color="success" type="submit" disabled={ isSubmitting }>{ t("submit") }</Button>
            <Button sx={ { flex: 2 } } variant="contained" color="warning" type="button" disabled={ isSubmitting } onClick={ cancelUpdate }> { t("cancel") }</Button>
        </div>
    );
}
