import React from 'react';
import TableCell from '@mui/material/TableCell';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { getTotalPrice } from '@my-org/shared/utils';
import { store } from '@myorg/state';
import { useNavigate } from 'react-router-dom';
import { setDrawerOpen } from '@myorg/state';

export default function TableContentRowCell({ row }) {
  const navigate = useNavigate();
  const NavigateToDetails = (transactionId) => {
    store.dispatch(setDrawerOpen());
    navigate(`/transactions/${transactionId}`);
  };

  return (
    <>
      <TableCell component="th" scope="row">
        { row.id }
      </TableCell>
      <TableCell align="left">{ row.receiver }</TableCell>
      <TableCell align="left">{ row.price }</TableCell>
      <TableCell align="left">{ row.VAT }</TableCell>
      <TableCell align="right">{ getTotalPrice(row.price, row.VAT) }</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={ () => NavigateToDetails(row.id) }
        ><ArrowForwardIcon color="primary" sx={ { cursor: "pointer" } } /></IconButton>
      </TableCell>
    </>
  );
}
