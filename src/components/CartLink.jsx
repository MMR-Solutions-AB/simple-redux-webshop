import { Badge, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { cartList } from "../app/ShopSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useEffect } from "react";
const CartLink = () => {
  const cartItems = useSelector(cartList);

  const [totalAmout, setTotalAmout] = useState(0);
  /*
  Räknar ut de totala antal artiklar, finns olika lösningar här. Vi kan bland annat använda map funktionen.
  */
  function calculateTotalAmout() {
    cartItems.map((item) => {
      setTotalAmout((prev) => prev + Number(item.amount));
      return null;
    });
  }
  /*
  Vi anropar funktion in useEffect där den "lyssnar" på state changes i cartItems state vilket vi deklarerar i vårt dependency 
  med cleanup funktion hindrar vi att lokalt state dubbleras vid ändring av cartItems state "vi vill alltid ha en färsk uppdatering"
  */
  useEffect(() => {
    calculateTotalAmout();
    return () => {
      setTotalAmout(0);
    };
  }, [cartItems]);

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Badge badgeContent={totalAmout} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartLink;
