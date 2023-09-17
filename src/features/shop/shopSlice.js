import { createSlice } from "@reduxjs/toolkit";
import storeItems from "../../data/items.json";

const initialState = {
  shopItems: storeItems,
  cartItems: [],
  total: 0,
  isLoading: true,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.shopItems.forEach((item) => {
        item.amount = 0;
      });
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id != payload.id);
    },
    add2Cart: (state, action) => {
      action.payload.amount = 1;
      state.cartItems.push(action.payload);
    },
    totalPrice: (state) => {
      const test = state.cartItems.reduce((p, c) => {
        return c.price * c.amount + p;
      }, 0);
      state.total = test; 
    },
    increase: (state, { payload }) => {
      const product = state.shopItems.find((item) => item.id === payload.id);
      const productCart = state.cartItems.find(
        (item) => item.id === payload.id
      );
      product.amount = product.amount + 1;
      productCart.amount = product.amount;
    },
    decrease: (state, { payload }) => {
      const product = state.shopItems.find((item) => item.id === payload.id);
      const productCart = state.cartItems.find(
        (item) => item.id === payload.id
      );
      product.amount = product.amount - 1;
      productCart.amount = product.amount;
      if (productCart.amount === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id != productCart.id
        );
      }
    },
  },
});

export const { increase } = shopSlice.actions;
export const { decrease } = shopSlice.actions;
export const { clearCart } = shopSlice.actions;
export const { totalPrice } = shopSlice.actions;
export const { add2Cart } = shopSlice.actions;

export default shopSlice.reducer;
