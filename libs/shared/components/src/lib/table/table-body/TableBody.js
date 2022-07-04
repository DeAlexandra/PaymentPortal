import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableContentRowCell from '../table-content-row-cell/TableContentRowCell';
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
