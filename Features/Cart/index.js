import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/Firebase";
import { PRODUCTS } from "../../Data/Products";
const initialState = {
  value: {
    cart: [],
    response: {},
    loading: false,
    error: false,
  },
};

export const confirmPurchase = createAsyncThunk(
  "cart/confirm",

  async (items, asyncThunk) => {
    try {
      const res = await fetch(`${DB_URL}order.json`, {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toLocaleString(),
          items: items,
        }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error " + error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productoRepetido = state.value.cart.find(
        (x) => x.id === action.payload.id
      );
      if (productoRepetido) {
        state.value.cart.map((x) => {
          if (x.id === action.payload.id) x.quantity++;
          return x;
        });
      } else {
        const producto = PRODUCTS.find((x) => x.id === action.payload.id);
        state.value.cart.push({ ...producto, quantity: 1 });
      }
    },
    removeItem: () => {},
  },
  extraReducers: {
    [confirmPurchase.pending]: (state) => {
      state.value.loading = true;
    },
    [confirmPurchase.fulfilled]: (state, { payload }) => {
      (state.value.response = payload), (state.value.loading = false);
    },
    [confirmPurchase.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
