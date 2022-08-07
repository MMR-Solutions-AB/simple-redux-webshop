import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ data, addProduct }) => {
  const { title, description, img, price } = data;

  console.log("ProductCard Renderas");

  return (
    <Card sx={{ maxWidth: 245, height: "550px" }}>
      <CardMedia
        style={{ paddingTop: "20px" }}
        component="img"
        height="255"
        image={img}
      />
      <Box height={190}>
        <Typography padding={2} variant="h5">
          {title}
        </Typography>
        <Typography padding={2} fontSize="15px">
          {description}
        </Typography>
      </Box>
      <Divider style={{ margin: "10px" }} />
      <Box padding={"10px"} display={"flex"} justifyContent={"center"}>
        <Button onClick={() => addProduct(data)} variant="contained">
          Lägg till {`${price}:-`}
        </Button>
      </Box>
    </Card>
  );
};

export default React.memo(ProductCard);
