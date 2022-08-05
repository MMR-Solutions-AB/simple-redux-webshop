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

const cartList = [
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
      <Divider style={{ margin: "5rem" }} />
      {/* -------------- Produkt listan -------------- */}
      <Grid container spacing={2} justifyContent="center">
        {productList.map((product, index) => {
          return (
            <Grid key={index} item>
              <ProductCard data={product} />
            </Grid>
          );
        })}
      </Grid>
      <Divider style={{ margin: "5rem" }} />
      {/* -------------- Varukorg listan -------------- */}
      <Box display="flex" justifyContent="center">
        <Stack spacing={2}>
          {cartList.map((product, index) => {
            return <CartItem key={index} data={product} />;
          })}
        </Stack>
      </Box>
      <Divider style={{ margin: "5rem" }} />
    </Container>
  );
};

export default ProductPage;
