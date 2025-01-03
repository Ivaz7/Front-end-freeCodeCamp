import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: 4,
  color: 4
}

export const bgTextSlice = createSlice({
  name: 'bgText',
  initialState,
  reducers: {
    changeColor: (state) => {
      state.bgColor = ((state.bgColor + 1) % 7),
      state.color = ((state.color + 1) % 7) 
    }
  }
})

export const { changeColor } = bgTextSlice.actions;

export default bgTextSlice.reducer;