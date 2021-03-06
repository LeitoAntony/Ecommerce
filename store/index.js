import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../Features/Products";
import categoriesReducer from "../Features/Categories";
import cartReducer from "../Features/Cart";
import orderReducer from "../Features/Orders";
import authReducer from "../Features/Auth";
import locationReducer from "../Features/Locations";
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    orders: orderReducer,
    auth: authReducer,
    locations: locationReducer
  },
});

export default store;
