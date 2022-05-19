import React from 'react';
import { TableWrapper, TableHeader, TableContentBody } from "../../../shared/components/table/index";

export default function Table({ tableHeaderTitles, tableEntries }) {
    return (
        <TableWrapper >
            <TableHeader tableHeaderTitles={ tableHeaderTitles } />
            <TableContentBody tableEntries={ tableEntries } ></TableContentBody>
        </TableWrapper >
    );
}
