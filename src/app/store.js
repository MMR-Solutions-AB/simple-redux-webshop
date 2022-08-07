import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from "./ShopSlice";

const store = configureStore({
  reducer: ShopSlice,
});

export default store;
