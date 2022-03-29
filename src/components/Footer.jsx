import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@material-ui/core';

const CopyRight = () => {
  return (
    <Typography >{ "Copyright © My Website " }{ new Date().getFullYear() }</Typography>
  );
};

export default function Footer() {
  return (
    <Box sx={ {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      py: "16px"
    } }>
      <CopyRight />
    </Box>
  );
}
