import { RangePicker } from "@myorg/shared/components";
import { dateFormatter, CUSTOM_INTERVAL } from "@my-org/shared/utils";
import { LineChartContainer } from "./LineChartContainer";
import { useDates } from "@myorg/state";

function CustomIntervalPicker() {
    const { startDate, endDate, handleChangeStart, handleChangeEnd } = useDates();
    return (
        <>
            <RangePicker
                startDate={ startDate }
                endDate={ endDate }
                handleChangeStart={ handleChangeStart }
                handleChangeEnd={ handleChangeEnd }
            />
            { (startDate !== null && endDate !== null) === false ? null : (
                <LineChartContainer
                    timeInterval={ CUSTOM_INTERVAL }
                    startDate={ startDate }
                    endDate={ endDate }
                    chartTitle={ `${dateFormatter(startDate)} - ${dateFormatter(endDate)}` }
                />
            ) }
        </>
    );
}
export { CustomIntervalPicker };
