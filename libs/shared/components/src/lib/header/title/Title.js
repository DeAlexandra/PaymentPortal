import React from 'react';
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';

function Title({ text }) {
  const { t } = useTranslation();
  return (
    <Typography
      sx={ { p: 2 } }
      variant="h6"
      flexGrow={ 1 }
    >
      { t(text) }
    </Typography>
  );
}
export { Title };