import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const CartItem = ({ data, addOrSubItem }) => {
  const { title, price, amount } = data;

  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      padding={2}
      margin={2}
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <Box
        display={"flex"}
        justifyContent="space-around"
        alignItems="center"
        width={200}
      >
        <Typography>{title}</Typography>
        <Divider orientation="vertical" />
        <Typography>{price * amount}:-</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent="space-between"
        padding="10px"
        width={200}
      >
        <Button
          onClick={() => {
            addOrSubItem(false, data);
          }}
          variant="contained"
          size="small"
        >
          -
        </Button>
        <Typography>{amount}</Typography>
        <Button
          onClick={() => {
            addOrSubItem(true, data);
          }}
          variant="contained"
          size="small"
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
