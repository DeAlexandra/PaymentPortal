import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DatePicker({ startDate, endDate, handleChangeStart, handleChangeEnd }) {
    return (
        <div>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
                <DesktopDatePicker
                    label="start_date"
                    inputFormat="MM/dd/yyyy"
                    value={ startDate }
                    onChange={ handleChangeStart }
                    renderInput={ (params) => <TextField { ...params } /> }
                />
                <DesktopDatePicker
                    label="end_date"
                    inputFormat="MM/dd/yyyy"
                    value={ endDate }
                    onChange={ handleChangeEnd }
                    renderInput={ (params) => <TextField { ...params } /> }
                />
            </LocalizationProvider>

        </div>
    );
}