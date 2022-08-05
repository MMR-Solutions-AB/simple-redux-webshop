import React from "react";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import CartLink from "./CartLink";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <CartLink />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
