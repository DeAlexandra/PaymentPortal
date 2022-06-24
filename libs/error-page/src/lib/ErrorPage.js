import React from 'react';
import { Typography, Box } from "@mui/material";

function ErrorPage() {
  return (
    <Box
      sx={ {
        display: "flex",
        justifyContent: "center",
        padding: "10% 10%"
      } }>
      <Typography>Page not found</Typography>
    </Box>
  );
}
export { ErrorPage };