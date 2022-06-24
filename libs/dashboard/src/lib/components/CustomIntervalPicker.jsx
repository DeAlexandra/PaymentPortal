import React from 'react';
import { RangePicker } from '@myorg/shared/components';
import { dateFormatter } from '@my-org/shared/utils';
import { LineChartContainer } from '@myorg/dashboard';
import { useDates } from '@myorg/state';
import { CUSTOM_INTERVAL } from '@my-org/shared/utils';

export default function CustomIntervalPicker() {
    const { startDate, endDate, handleChangeStart, handleChangeEnd } = useDates();
    return (
        <>
            <RangePicker startDate={ startDate } endDate={ endDate } handleChangeStart={ handleChangeStart } handleChangeEnd={ handleChangeEnd } />
            { (startDate !== null && endDate !== null) === false
                ? null
                : <LineChartContainer
                    timeInterval={ CUSTOM_INTERVAL } startDate={ startDate } endDate={ endDate }
                    chartTitle={ `${dateFormatter(startDate)} - ${dateFormatter(endDate)}` } />
            }
        </>
    );
}
