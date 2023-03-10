import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="nav" component="nav" position="static">
        <Toolbar>
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
