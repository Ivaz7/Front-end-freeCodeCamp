import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { value: "AC", name: "clear", operator: true },
  { value: "C", name: "delete", operator: false},
  { value: "/", name: "divide", operator: true },
  { value: "*", name: "multiply", display: "X", operator: true },
  { value: 7, name: "seven", operator: false },
  { value: 8, name: "eight", operator: false },
  { value: 9, name: "nine", operator: false },
  { value: "-", name: "subtract", operator: true },
  { value: 4, name: "four", operator: false },
  { value: 5, name: "five", operator: false },
  { value: 6, name: "six", operator: false },
  { value: "+", name: "add", operator: true },
  { value: 1, name: "one", operator: false },
  { value: 2, name: "two", operator: false },
  { value: 3, name: "three", operator: false },
  { value: 0, name: "zero", operator: false },
  { value: ".", name: "decimal", operator: false },
  { value: "=", name: "equals", operator: false }
];


export const buttonCalSlice = createSlice({
  name: 'buttonCal',
  initialState,
  reducers: {}
})

export default buttonCalSlice.reducer;