import { IconButton } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartLink = () => {
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <ShoppingCartIcon/>
      </IconButton>
    </div>
  );
};

export default CartLink;
