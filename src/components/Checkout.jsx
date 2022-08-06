import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Checkout = ({ summery }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography margin={5} variant="h3">
        Totalt: {summery}:-
      </Typography>
      <Button disabled={!summery ? true : false} variant="contained">
        Checkout
      </Button>
    </Box>
  );
};

export default Checkout;
