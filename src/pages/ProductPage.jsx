import { Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartItem from "../components/CartItem";
import ProductCard from "../components/ProductCard";

const productList = [
  {
    title: "Iphone 13",
    description:
      "iPhone 13. Det mest avancerade dubbelkamerasystemet någonsin på en iPhone.",
    img: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-13-128gb-blue(1020694)_460474_5_Normal_Large.webp",
    price: "8490",
  },
  {
    title: "Iphone 12",
    description:
      "iPhone 12. 5G för nedladdning av filmer i farten och streaming av högupplöst video.",
    img: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-12-64gb-5g-green(1015055)_400304_1_Normal_Large.webp",
    price: "7490",
  },
  {
    title: "Iphone 11",
    description:
      "iPhone 12. 5G för nedladdning av filmer i farten och streaming av högupplöst video.",
    img: "https://www.netonnet.se/GetFile/ProductImagePrimary/mobil-smartwatch/mobiltelefoner/iphone/apple-iphone-11-64gb-white-2020(1015699)_409579_3_Normal_Large.webp",
    price: "7490",
  },
];

const ProductPage = () => {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Grid container spacing={2} justifyContent="center">
        {productList.map((product, index) => {
          return (
            <Grid key={index} item>
              <ProductCard data={product} />
            </Grid>
          );
        })}
      </Grid>
      <Stack border={"1px solid pink"} marginTop={5} spacing={2}>
        {productList.map((product, index) => {
          return <CartItem key={index} data={product} />;
        })}
      </Stack>
    </Container>
  );
};

export default ProductPage;
