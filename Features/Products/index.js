import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../Data/Products";

const initialState = {
    value: {
        products: PRODUCTS,
        productsByCategory: [],
        productSelected: {},
    }
}

export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        }
})

// Action creators are generated for each case reducer function
//export const {selectCategory} = productSlice.actions

export default productSlice.reducer