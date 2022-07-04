import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function IsLoading() {
  return (
    <Box
      sx={ {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "150px"
      } }>
      <CircularProgress />
    </Box>
  );
}

export { IsLoading };