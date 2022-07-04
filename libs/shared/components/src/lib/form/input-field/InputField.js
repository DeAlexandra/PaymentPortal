import React from 'react';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import { getTotalPrice } from '@my-org/shared/utils';

function InputField({ fieldName, displayName = fieldName, handleChange, handleBlur, values, touched, errors, disabled = false }) {
  const { t } = useTranslation();
  return (
    <>
      <div style={ { marginTop: "10px" } }>
        <label htmlFor={ fieldName }>{ t(displayName) }</label></div>
      <TextField
        fullWidth
        variant="outlined"
        id={ fieldName }
        name={ fieldName }
        type="text"
        onChange={ handleChange }
        value={ fieldName !== "total" ? values[fieldName] : getTotalPrice(values.price, values.VAT) }
        helperText={ Boolean(touched[fieldName]) && errors[fieldName] }
        error={ Boolean(touched[fieldName]) && errors[fieldName] }
        onBlur={ handleBlur }
        disabled={ disabled }
      />
    </>
  );
}
export { InputField };

