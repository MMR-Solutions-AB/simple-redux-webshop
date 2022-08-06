import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import ProductCard from "../components/ProductCard";
import Checkout from "../components/Checkout";
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

const MainPage = () => {
  return (
    <div>
      {/* --------- Products --------- */}
      <Divider style={{ margin: "5rem" }} />
      <Box>
        <Grid container spacing={5} justifyContent="center">
          {productList.map((product, index) => {
            return (
              <Grid key={index} item>
                <ProductCard data={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Divider style={{ margin: "5rem" }} />
      {/* --------- Cart --------- */}
      <Box display="flex" justifyContent="center">
        <Grid maxWidth={800} container justifyContent="center">
          {cartList.map((item, index) => {
            return (
              <Grid xs key={index} item>
                <CartItem data={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Divider style={{ margin: "5rem" }} />
      {/* --------- Checkout --------- */}
      <Box>
        <Checkout summery={null} />
      </Box>
      <Divider style={{ margin: "5rem" }} />
    </div>
  );
};

export default MainPage;
