import { createSlice } from "@reduxjs/toolkit";
import storeItems from "../../data/items.json";

const initialState = {
  shopItems: storeItems,
  isLoading: true,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
});

export default shopSlice.reducer;
