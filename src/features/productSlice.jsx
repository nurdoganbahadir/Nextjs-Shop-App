import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
  },
});

export const { fetchStart, getProductSuccess } = productSlice.actions;

export default productSlice.reducer;
