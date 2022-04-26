import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useTranslation } from 'react-i18next';

export default function DatePicker({ startDate, endDate, handleChangeStart, handleChangeEnd }) {
    const { t } = useTranslation();
    return (
        <div style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
                <DesktopDatePicker
                    label={ t("start_date") }
                    inputFormat="MM/dd/yyyy"
                    value={ startDate }
                    onChange={ handleChangeStart }
                    renderInput={ (params) => <TextField { ...params } /> }
                    maxDate={ new Date() }
                />
                <DesktopDatePicker
                    label={ t("end_date") }
                    inputFormat="MM/dd/yyyy"
                    value={ endDate }
                    onChange={ handleChangeEnd }
                    renderInput={ (params) => <TextField { ...params } /> }
                    maxDate={ new Date() }
                    minDate={ startDate }
                />
            </LocalizationProvider>

        </div>
    );
}