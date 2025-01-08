import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breakLgth: 5,
  sessionLgth: 25
}

export const lengthSlice = createSlice({
  name: 'length',
  initialState,
  reducers: {
    incremenetBreak: (state) => {
      if (state.breakLgth === 60) {
        return;
      }
      state.breakLgth += 1;
    },
    incremenetSession: (state) => {
      if (state.sessionLgth === 60) {
        return;
      }
      state.sessionLgth += 1;
    },
    decrementBreak: (state) => {
      if (state.breakLgth === 1) {
        return;
      }
      state.breakLgth -= 1;
    },
    decrementSession: (state) => {
      if (state.sessionLgth === 1) {
        return;
      }
      state.sessionLgth -= 1;
    }
  }
}) 

export const { incremenetBreak, incremenetSession, decrementBreak, decrementSession } = lengthSlice.actions;

export default lengthSlice.reducer;