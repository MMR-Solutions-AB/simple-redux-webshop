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
      /* Om ny tillagd produkt existerar i kundkorg, adderar antalet av den produkten "amount" */
      const validateItem = state.cart.find((item) => {
        const { title } = action.payload;
        return item.title === title;
      });

      /* Hur vi ändrar state i React & Context API, Vi byter ut det gamla mot ett nytt och uppdaterat state */
      if (!validateItem) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart = state.cart.map((item) => {
          return item.title === validateItem.title
            ? { ...item, amount: Number(item.amount) + 1 }
            : item;
        });
      }
      /* ---------------------------------------------------------------------- */
      /* Redux tillåter Mutation i sin reducer, tillskillnad från React useState */
      /* state.cart.push({ ...action.payload, amount: 1 }); */
      /* ---------------------------------------------------------------------- */
    },
    addAmount: (state, action) => {
      const { title, id } = action.payload;
      console.log(title);
      state.cart = state.cart.map((item) => {
        return item.id === id
          ? { ...item, amount: Number(item.amount) + 1 }
          : item;
      });
    },
    subtractAmount: (state, action) => {
      const { title, amount, id } = action.payload;
      /* 
      Vi kollar om någon av produkterna har 1 amount, när detta action anropas är anledningen att ta bort den sista
      vilket vi kan göra utan att behöva sätta amount till 0. 
      */
      if (amount === 1) {
        state.cart = state.cart.filter((item) => {
          return item.id !== id;
        });
        /* Här subtraherar vi amount i cartItems objektet. */
      } else {
        state.cart = state.cart.map((item) => {
          return item.title === title
            ? { ...item, amount: Number(item.amount) - 1 }
            : item;
        });
      }
    },
  },
});

/* Exportera state, ett av fler alternativ för att ta del av state runt om i din applikation. */
export const productList = (state) => state.products;
export const cartList = (state) => state.cart;

/* Actions i reducern */
export const { addCartItem, subtractAmount, addAmount } = shopSlice.actions;

/* Reducer to store */
export default shopSlice.reducer;
