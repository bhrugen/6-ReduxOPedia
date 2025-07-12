import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 15 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultipler: (state, action) => {
      state.count -= Number(action.payload);
    },
    incrementMultipler: (state, action) => {
      state.count += Number(action.payload);
    },
    resetCounter: (state) => {
      state.count = 15;
    },
  },
});

export const {
  increment,
  decrement,
  decrementMultipler,
  incrementMultipler,
  resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
