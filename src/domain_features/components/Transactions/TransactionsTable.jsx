import React from 'react';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material/';
import TableWrapper from "../../../shared/components/table/TableContainer";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import store from '../../../shared/context/redux/store';
import { setOpen } from "../../../shared/context/redux/actions";
import { useNavigate } from 'react-router-dom';

export default function TransactionsTable({ getTotalPrice, transactions }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const NavigateToDetails = (transactionId) => {
        store.dispatch(setOpen);
        navigate(`/transactions/${transactionId}`);
    };

    return (
        <TableWrapper >
            <TableHead sx={ { bgcolor: "primary.main", border: 1, borderColor: "transparent" } }>
                <TableRow>
                    <TableCell sx={ { color: 'white' } } align="left">{ t("id") }</TableCell>
                    <TableCell sx={ { color: 'white' } } align="left"> { t("shop") }</TableCell>
                    <TableCell sx={ { color: 'white' } } align="left">{ t("price") }</TableCell>
                    <TableCell sx={ { color: 'white' } } align="left">{ t("VAT") }</TableCell>
                    <TableCell sx={ { color: 'white' } } align="right">{ t("total") }</TableCell>
                    <TableCell sx={ { color: 'white' } } align="right"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { transactions.map((row) => (
                    <TableRow
                        hover
                        key={ row.id }
                        sx={ { borderBottom: 2, borderColor: "grey.200", } }
                    >
                        <TableCell component="th" scope="row" sx={ { py: "10px" } }>
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
                    </TableRow>
                )) }
            </TableBody>
        </TableWrapper>
    );
}
