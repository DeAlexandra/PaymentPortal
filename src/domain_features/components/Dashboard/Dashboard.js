import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TabContainer from '../../../shared/components/tabs/TabContainer';
import tabs from './tabsArray';

export default function Dashboard() {
  const { t } = useTranslation();
  return (
    <Box sx={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "100px", marginLeft: "75px" } }>
      <Typography sx={ { paddingBottom: "10px" } }> { t("transactions_charts") }</Typography>
      <TabContainer tabs={ tabs } />
    </Box>
  );
}
