import React, { useState } from "react";
import { Box } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import BarChart from "./chart components/BarChart";
import { lastDayOfPreviousMonth } from "./chart components/chartsFunctions";

export default function TabsContainer() {
    const [selectedTab, setSelectedTab] = useState("0");

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <Box sx={ { width: "1000px", height: "600px", boxShadow: 3, borderRadius: '6px' } }>
            <TabContext value={ selectedTab }>
                <Box sx={ { borderBottom: 1 } }>
                    <TabList onChange={ handleChange } >
                        <Tab label="Last 10 Days" value="0" />
                        <Tab label="Last Month" value="1" />
                        <Tab label="Last Year" value="2" />
                        <Tab label="Last 2 Years" value="3" />
                        <Tab label="Custom interval" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="0"><BarChart timeInterval={ "Last 10 Days" } chartTitle={ "Last 10 Days" } /></TabPanel>
                <TabPanel value="1"><BarChart timeInterval={ "Last Month" } chartTitle={ `${lastDayOfPreviousMonth.toLocaleString("en-GB", { month: "long" })} ${lastDayOfPreviousMonth.getFullYear()}` } /></TabPanel>
                <TabPanel value="2"><BarChart timeInterval={ "Last Month" } /></TabPanel>
                <TabPanel value="3"><BarChart timeInterval={ "Last Month" } /></TabPanel>
                <TabPanel value="4"><BarChart timeInterval={ "Last Month" } /></TabPanel>
            </TabContext>
        </Box>
    );
}

