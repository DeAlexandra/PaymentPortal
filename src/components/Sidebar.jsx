import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import DrawerMenu from "./DrawerMenu";


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={ { display: "flex" } }>
      <CssBaseline />
      <Header
        handleDrawerOpen={ handleDrawerOpen }
        open={ open } />
      <DrawerMenu
        variant="permanent"
        open={ open }
        theme={ theme }
        handleDrawerClose={ handleDrawerClose }
      />
    </Box>
  );
}
