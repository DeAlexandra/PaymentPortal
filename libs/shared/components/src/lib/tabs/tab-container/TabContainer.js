import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../tab-panel/TabPanel";
import { t } from "i18next";

export function TabContainer({ tabs }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={ { display: "flex", flexDirection: "column", width: "1000px", height: "650px", boxShadow: 3, borderRadius: '6px' } }>
      <Box sx={ { borderBottom: 1, borderColor: "divider" } }>
        <Tabs
          value={ value }
          onChange={ handleChange }
          aria-label="chart tabs"
        >
          { tabs.map(({ label }, i) => (
            <Tab label={ t(label) } key={ i } />
          )) }
        </Tabs>
      </Box>
      { tabs.map(({ Component }, i) => (
        <TabPanel value={ value } index={ i } key={ i }>
          { Component }
        </TabPanel>
      )) }
    </Box>
  );
}
export default TabContainer;