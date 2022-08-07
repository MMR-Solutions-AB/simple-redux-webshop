import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "./constants";

/* Vårt state */
const initialState = {
  products: allProducts,
  cart: [],
  summery: null,
};

const shopSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      /* Hur vi ändrar state i React & Context API, Vi byter ut det gamla mot ett nytt och uppdaterat state */
      state.cart = [...state.cart, { ...action.payload }];
      /* Redux tillåter Mutation i sin reducer, tillskillnad från React useState */
      /* state.cart.push(action.payload); */
    },
  },
});

/* Exportera state, ett av fler alternativ för att ta del av state runt om i din applikation. */
export const productList = (state) => state.products;
export const cartList = (state) => state.cart;

/* Actions i reducern */
export const { addCartItem } = shopSlice.actions;

/* Reducer to store */
export default shopSlice.reducer;
