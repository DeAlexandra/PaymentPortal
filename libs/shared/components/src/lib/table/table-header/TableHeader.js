import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';

import { t } from "i18next";

export default function TableHeader({ tableHeaderTitles }) {
  return (
    <TableHead sx={ { bgcolor: "primary.main", border: 1, borderColor: "transparent" } }>
      <TableRow>
        {
          tableHeaderTitles.map((elem, i) => (
            < TableCell sx={ { color: 'white' } }
              align="left" key={ i }> { t(elem) } </TableCell >
          ))
        }
      </TableRow>
    </TableHead>
  );
}

