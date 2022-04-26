import React from 'react';
import { Box } from '@mui/system';
import TabsContainer from '../../components/TabsContainer';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <Box sx={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "100px", marginLeft: "75px" } }>
      <Typography sx={ { paddingBottom: "10px" } }> { t("transactions_charts") }</Typography>
      <TabsContainer />
    </Box>
  );
}
