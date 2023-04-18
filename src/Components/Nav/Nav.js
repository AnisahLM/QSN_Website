import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import DrawerList from "./DrawerList";

const Nav = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggle = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="nav" component="nav" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggle(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={toggleDrawer}
            onClose={() => handleToggle(false)}
          >
            <DrawerList />
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="link" id="QSNnav" to="/">
              QSN
            </Link>
          </Typography>
          <Button variant="contained">Submit Order Request</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
