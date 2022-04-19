import React from 'react';
import { Box } from '@mui/system';
import TabsContainer from '../../components/TabsContainer';
import { Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={ { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "100px", marginLeft: "75px" } }>
      <Typography sx={ { paddingBottom: "10px" } }> Transactions chart</Typography>
      <TabsContainer />
    </Box>
  );
}
