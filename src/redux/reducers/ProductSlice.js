import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  carts: [],
};

// fetch all products

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://fakestoreapi.com/products");
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: "products/allproducts",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const cartItem = state.products.find((item) => {
        return item.id === action.payload;
      });

      state.carts = [...state.carts, cartItem];
    },
    RemoveCartItem: (state, action) => {
      const remailItems = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = remailItems;
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      state.carts = state.carts.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    },
  },
  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

export const { AddToCart, RemoveCartItem, updateCartItem } = ProductSlice.actions;
export default ProductSlice.reducer;
