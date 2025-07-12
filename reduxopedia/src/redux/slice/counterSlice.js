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
  },
});

export const { increment, decrement, decrementMultipler, incrementMultipler } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
