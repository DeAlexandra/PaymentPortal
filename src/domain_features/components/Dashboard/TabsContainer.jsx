import React, { useState } from "react";
import { Box } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import BarChartContainer from "../../APIs/DashboardAPI/charts/BarChartContainer";
import { RangePicker } from "../../../shared/components/index";
import LineChartContainer from "../../APIs/DashboardAPI/charts/LineChartContainer";
import { useTranslation } from "react-i18next";
import { lastDayOfPreviousMonth, lastYear, secondToLastYear, LAST_TEN_DAYS, LAST_MONTH, LAST_YEAR, LAST_TWO_YEARS, CUSTOM_INTERVAL } from "../../../shared/utils/dateConstants";
import { dateFormatter } from "../../../shared/utils/dateManipulationFunctions";
import { useDates } from "../../../shared/custom_hooks/index";

export default function TabsContainer() {
    const [selectedTab, setSelectedTab] = useState("0");
    const { t } = useTranslation();
    const { startDate, endDate, handleChangeStart, handleChangeEnd } = useDates();
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={ { display: "flex", flexDirection: "column", width: "1000px", height: "650px", boxShadow: 3, borderRadius: '6px' } }>
            <TabContext value={ selectedTab }>
                <Box sx={ { borderBottom: 1 } }>
                    <TabList onChange={ handleChange } >
                        <Tab label={ t("last_ten_days") } value="0" />
                        <Tab label={ t("last_month") } value="1" />
                        <Tab label={ t("last_year") } value="2" />
                        <Tab label={ t("two_years_ago") } value="3" />
                        <Tab label={ t("custom_interval") } value="4" />
                    </TabList>
                </Box>
                <TabPanel value="0"><BarChartContainer timeInterval={ LAST_TEN_DAYS } chartTitle={ t("last_ten_days") } /></TabPanel>
                <TabPanel value="1"><BarChartContainer timeInterval={ LAST_MONTH } chartTitle={ `${lastDayOfPreviousMonth.toLocaleString("en-GB", { month: "long" })} ${lastDayOfPreviousMonth.getFullYear()}` } /></TabPanel>
                <TabPanel value="2"><BarChartContainer timeInterval={ LAST_YEAR } chartTitle={ `${lastYear}` } /></TabPanel>
                <TabPanel value="3"><BarChartContainer timeInterval={ LAST_TWO_YEARS } chartTitle={ `${secondToLastYear}` } /></TabPanel>
                <TabPanel value="4">
                    <RangePicker startDate={ startDate } endDate={ endDate } handleChangeStart={ handleChangeStart } handleChangeEnd={ handleChangeEnd } />
                    { (startDate !== null && endDate !== null) === false
                        ? null
                        : <LineChartContainer
                            timeInterval={ CUSTOM_INTERVAL } startDate={ startDate } endDate={ endDate }
                            chartTitle={ `${dateFormatter(startDate)} - ${dateFormatter(endDate)}` } />
                    }
                </TabPanel>
            </TabContext>
        </Box>
    );
}
