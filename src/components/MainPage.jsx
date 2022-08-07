import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import ProductCard from "./ProductCard";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import { productList, cartList, addCartItem } from "../app/ShopSlice";
import { useCallback } from "react";

const MainPage = () => {
  /* useDispatch to dispatch actions decleard in slice */
  const dispatch = useDispatch();

  /* useSelector to get state from store */
  const products = useSelector(productList);
  const cartItems = useSelector(cartList);

  /* used in productCart component to initilize payload in action */
  function addProductToCart(product) {
    dispatch(addCartItem(product));
  }

  /* ------- En mer avancerad version av hur man bygger react applikationer. ------- */

  /*   const addProductToCart = useCallback(
    (product) => {
      dispatch(addCartItem(product));
    },
    [products]
  );
 */
  return (
    <div>
      {/* --------- Products --------- */}
      <Divider style={{ margin: "5rem" }} />
      <Box>
        <Grid container spacing={5} justifyContent="center">
          {products.map((product, index) => {
            return (
              <Grid key={index} item>
                <ProductCard data={product} addProduct={addProductToCart} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Divider style={{ margin: "5rem" }} />
      {/* --------- Cart --------- */}
      <Box display="flex" justifyContent="center">
        <Grid maxWidth={800} container justifyContent="center">
          {cartItems.map((item, index) => {
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
