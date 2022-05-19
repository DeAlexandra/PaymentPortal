import React from 'react';
import { RangePicker } from '../../../shared/components';
import { dateFormatter } from '../../../shared/utils/dateManipulationFunctions';
import LineChartContainer from '../../APIs/DashboardAPI/charts/LineChartContainer';
import { useDates } from '../../../shared/custom_hooks';
import { CUSTOM_INTERVAL } from '../../../shared/utils/dateConstants';

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
