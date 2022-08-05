import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ data }) => {
  const { title, description, img, price } = data;
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        style={{ paddingTop: "20px" }}
        component="img"
        alt="green iguana"
        height="255"
        image={img}
      />
      <Typography padding={2} variant="h5">
        {title}
      </Typography>
      <Typography padding={2} fontSize="15px">
        {description}
      </Typography>
      <Divider style={{ margin: "10px" }} />
      <Box padding={"10px"} display={"flex"} justifyContent={"center"}>
        <Button variant="contained">Köp</Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
