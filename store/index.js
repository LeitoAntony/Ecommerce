import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../Features/Products";
import categoriesReducer from "../Features/Categories";
import cartReducer from "../Features/Cart";
import orderReducer from "../Features/Orders";
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    orders: orderReducer,
  },
});

export default store;
