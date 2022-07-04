import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function DrawerTitle({ title }) {
  const { t } = useTranslation();
  return (
    <Typography variant="h3" component="h1" align="center">{ t(title) }</Typography>
  );
}
export { DrawerTitle };