import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function BoxContainer(props) {
  return (
    <Box
      sx={ {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingBottom: "300px"
      } }
    > <Typography component={ 'span' }>{ props.children }</Typography></Box>
  );
}
export { BoxContainer };