import React from 'react';
import TableWrapper from '../table-container/TableContainer';
import TableHeader from '../table-header/TableHeader';
import TableContentBody from '../table-body/TableBody';

function Table({ tableHeaderTitles, tableEntries }) {
  return (
    <TableWrapper >
      <TableHeader tableHeaderTitles={ tableHeaderTitles } />
      <TableContentBody tableEntries={ tableEntries } ></TableContentBody>
    </TableWrapper >
  );
}
export { Table };