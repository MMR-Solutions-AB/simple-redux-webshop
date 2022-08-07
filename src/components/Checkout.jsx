import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { cartList } from "../app/ShopSlice";
import { useState } from "react";
import { useEffect } from "react";
const Checkout = () => {
  /* Hämta vårt state från store */
  const cartItems = useSelector(cartList);
  /* Vi lagrar uträkningen i vårt state för att rendera ut det i vår komponent */
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState();
  /*
  Räknar ut varukorgens totala summa, finns olika lösningar här. Vi kan bland annat använda map funktionen.
  */
  function calculatePrice() {
    cartItems.map((item) => {
      setTotalPrice((prev) => prev + Number(item.price) * Number(item.amount));
    });
  }
  /*
  Vi anropar funktion in useEffect där den "lyssnar" på state changes i cartItems state vilket vi deklarerar i vårt dependency 
  med cleanup funktion hindrar vi att lokalt state dubbleras vid ändring av cartItems state "vi vill alltid ha en färsk uppdatering"
  */
  useEffect(() => {
    calculatePrice();
    return () => {
      setTotalPrice(0);
    };
  }, [cartItems]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography margin={5} variant="h3">
        Totalt: {totalPrice}:-
      </Typography>
      <Button
        onClick={() => {
          alert(totalPriceWithTax);
        }}
        disabled={!totalPrice ? true : false}
        variant="contained"
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Checkout;
