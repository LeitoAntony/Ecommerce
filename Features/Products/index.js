import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/Products";

const initialState = {
  value: {
    products: PRODUCTS,
    productsByCategory: [],
    productSelected: {},
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProductsByCategory: (state, action) => {
      const productsFiltered = state.value.products.filter(
        (x) => x.category === action.payload
      );
      state.value.productsByCategory = productsFiltered;
    },
    setProductSelected: (state, action) => {
        const productSelected = state.value.productsByCategory.find( x => x.id === action.payload)
        state.value.productSelected = productSelected
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsByCategory, setProductSelected } =
  productSlice.actions;

export default productSlice.reducer;
