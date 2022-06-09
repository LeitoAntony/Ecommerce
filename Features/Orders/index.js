import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/Firebase";

const initialState = {
  value: {
    orders: [],
    loading: false,
    error: false,
  },
};

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (email, asyncThunk) => {
    try {
      console.log(email)
      const res = await fetch(`${DB_URL}order.json`);
      const data = Object.values(await res.json());
      data.filter(item => item.email === email.email);
      return data
    } catch (error) {
      return rejectWithValue("Opps there seems to be an error " + error);
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.value.loading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      (state.value.orders = payload), (state.value.loading = false);
    },
    [getOrders.rejected]: (state) => {
      state.value.loading = false;
      state.value.error = true;
    },
  },
});

export default ordersSlice.reducer;
