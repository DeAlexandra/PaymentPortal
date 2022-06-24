import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { store } from '@myorg/state';
import { setDrawerClose } from '@myorg/state';

function FormButtons({ isSubmitting }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const setCloseDrawerAndNavigateBack = () => {
    navigate(-1);
    store.dispatch(setDrawerClose());
  };

  return (
    <div style={ { display: "flex", justifyContent: "center", marginTop: "10px" } }>
      <Button sx={ { flex: 2 } } variant="contained" color="success" type="submit" disabled={ isSubmitting }>{ t("submit") }</Button>
      <Button sx={ { flex: 2 } } variant="contained" color="warning" type="button" disabled={ isSubmitting } onClick={ setCloseDrawerAndNavigateBack }> { t("cancel") }</Button>
    </div>
  );
}
export { FormButtons };