import React from 'react';
import { TableBody, TableRow } from '@material-ui/core';
import TableContentRowCell from './TableContentRowCell';
export default function TableContentBody({ tableEntries }) {
    return (
        <TableBody>
            { tableEntries.map((row, i) => (
                <TableRow
                    hover
                    key={ i }
                    sx={ { borderBottom: 2, borderColor: "grey.200", } }
                >
                    <TableContentRowCell row={ row } />
                </TableRow>
            )) }
        </TableBody>
    );
}
