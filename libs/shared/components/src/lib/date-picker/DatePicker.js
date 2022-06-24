import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { useTranslation } from 'react-i18next';

function RangePicker({ startDate, endDate, handleChangeStart, handleChangeEnd }) {
  const { t } = useTranslation();
  return (
    <div style={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
      <LocalizationProvider dateAdapter={ AdapterDateFns }>
        <DatePicker
          label={ t("start_date") }
          inputFormat="MM/dd/yyyy"
          value={ startDate }
          onChange={ handleChangeStart }
          renderInput={ (params) => <TextField { ...params } /> }
          maxDate={ new Date() }
        />
        <DatePicker
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

export { RangePicker };