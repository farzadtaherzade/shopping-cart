import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import shopReducer from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});
