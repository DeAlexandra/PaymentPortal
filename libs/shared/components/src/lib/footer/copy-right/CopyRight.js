import { Typography } from '@mui/material';

function CopyRight() {
  return (
    <Typography >{ "Copyright © My Website " }{ new Date().getFullYear() }</Typography>
  );
}

export { CopyRight };