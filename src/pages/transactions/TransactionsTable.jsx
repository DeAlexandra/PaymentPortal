import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { useTranslation } from 'react-i18next';

export default function TransactionsTable({ getTotalPrice, transactions }) {
    const { t } = useTranslation();
    return (
        <TableContainer component={ Paper }
            sx={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "0",
                boxShadow: "0",
            } }>
            <Table sx={ {
                alignSelf: "flex-start",
                width: "60%",
                border: 1,
                marginTop: "100px",
                borderColor: "grey.200",
                boxSizing: "boxSizing",
                boxShadow: 4,
            } }
                size="small" aria-label="a table">
                <TableHead sx={ { bgcolor: "primary.main", border: 1, borderColor: "transparent" } }>
                    <TableRow>
                        <TableCell sx={ { color: 'white' } } align="left">{ t("id") }</TableCell>
                        <TableCell sx={ { color: 'white' } } align="left"> { t("shop") }</TableCell>
                        <TableCell sx={ { color: 'white' } } align="left">{ t("price") }</TableCell>
                        <TableCell sx={ { color: 'white' } } align="left">{ t("VAT") }</TableCell>
                        <TableCell sx={ { color: 'white' } } align="right">{ t("total") }</TableCell>
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
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
