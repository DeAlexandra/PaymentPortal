import React from 'react';
import { TableCell } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@material-ui/core';
import { getTotalPrice } from '../../utils/getTotalPrice';
import store from '../../context/redux/store';
import { setOpen } from "../../context/redux/actions";
import { useNavigate } from 'react-router-dom';

export default function TableContentRowCell({ row }) {
    const navigate = useNavigate();
    const NavigateToDetails = (transactionId) => {
        store.dispatch(setOpen);
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
