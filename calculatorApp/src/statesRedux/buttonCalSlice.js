import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { value: "AC", name: "AC" },
  { value: "/", name: "/" },
  { value: "*", name: "X" },
  { value: 7, name: "seven" },
  { value: 8, name: "eight" },
  { value: 9, name: "nine" },
  { value: "-", name: "-" },
  { value: 4, name: "four" },
  { value: 5, name: "five" },
  { value: 6, name: "six" },
  { value: "+", name: "+" },
  { value: 1, name: "one" },
  { value: 2, name: "two" },
  { value: 3, name: "three" },
  { value: 0, name: "zero" },
  { value: ".", name: "poin" },
  { value: "=", name: "equal" }
];

export const buttonCalSlice = createSlice({
  name: 'buttonCal',
  initialState,
  reducers: {}
})

export default buttonCalSlice.reducer;