import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';

export default function TableWrapper({ children }) {
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
                border: 1,
                marginTop: "100px",
                marginLeft: "80px",
                marginRight: "20px",
                borderColor: "grey.200",
                boxSizing: "boxSizing",
                boxShadow: 4,
            } }
                size="small" aria-label="transactions table">
                { children }
            </Table>
        </TableContainer>
    );
}
