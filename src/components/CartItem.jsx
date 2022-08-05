import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      padding={2}
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <Box
        display={"flex"}
        justifyContent="space-around"
        alignItems="center"
        width={200}
      >
        <Typography>Iphone 11</Typography>
        <Divider orientation="vertical" />
        <Typography>8995:-</Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent="space-between"
        padding="10px"
        width={200}
      >
        <Button variant="contained" size="small">
          -
        </Button>
        <Typography>8</Typography>
        <Button variant="contained" size="small">
          +
        </Button>
      </Box>
    </Box>
  );
};

export default CartItem;
