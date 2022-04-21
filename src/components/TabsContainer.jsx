import React, { useState } from "react";
import { Box } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import BarChart from "./chart components/BarChart";
import DatePicker from "./DatePicker";
import LineChart from "./chart components/LineChart";
import { lastDayOfPreviousMonth, lastYear, secondToLastYear, dateFormatter } from "./chart components/chartsFunctions";

export default function TabsContainer() {
    const [selectedTab, setSelectedTab] = useState("0");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleChangeStart = (date) => {
        setStartDate(date);

    };
    const handleChangeEnd = (date) => {
        setEndDate(date);
    };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={ { display: "flex", flexDirection: "column", width: "1000px", height: "650px", boxShadow: 3, borderRadius: '6px' } }>
            <TabContext value={ selectedTab }>
                <Box sx={ { borderBottom: 1 } }>
                    <TabList onChange={ handleChange } >
                        <Tab label="Last 10 Days" value="0" />
                        <Tab label="Last Month" value="1" />
                        <Tab label="Last Year" value="2" />
                        <Tab label="Two Years Ago" value="3" />
                        <Tab label="Custom interval" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="0"><BarChart timeInterval={ "Last 10 Days" } chartTitle={ "Last 10 Days" } /></TabPanel>
                <TabPanel value="1"><BarChart timeInterval={ "Last Month" } chartTitle={ `${lastDayOfPreviousMonth.toLocaleString("en-GB", { month: "long" })} ${lastDayOfPreviousMonth.getFullYear()}` } /></TabPanel>
                <TabPanel value="2"><BarChart timeInterval={ "Last Year" } chartTitle={ `${lastYear}` } /></TabPanel>
                <TabPanel value="3"><BarChart timeInterval={ "Two Years Ago" } chartTitle={ `${secondToLastYear}` } /></TabPanel>
                <TabPanel value="4">
                    <DatePicker startDate={ startDate } endDate={ endDate } handleChangeStart={ handleChangeStart } handleChangeEnd={ handleChangeEnd } />
                    <LineChart
                        timeInterval={ "Custom Interval" } startDate={ startDate } endDate={ endDate }
                        chartTitle={ (startDate !== null && endDate !== null) === false ? "Custom Interval" : (`${dateFormatter(startDate)} - ${dateFormatter(endDate)}`) } /></TabPanel>
            </TabContext>
        </Box>
    );
}
