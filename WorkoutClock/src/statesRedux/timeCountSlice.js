import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionTime: 0,
  breakTime: 0,
  sessionOnOrBreak: true,
  isRunning: false
}

export const timeCountSlice = createSlice({
  name: 'timeCount',
  initialState,
  reducers: {
    setSessionTime: (state, action) => {
      state.sessionTime = (action.payload * 60 * 1000);
    },
    setBreakTime: (state, action) => {
      state.breakTime = (action.payload * 60 * 1000);
    },
    startSessionTime: (state) => {
      state.sessionTime = state.sessionTime - 1000;
    },
    startBreakTime: (state) => {
      state.breakTime = state.breakTime - 1000;
    },
    startRunning: (state) => {
      state.isRunning = true;
    },
    pauseRunning: (state) => {
      state.isRunning = false;
    },
    changeStatus: (state) => {
      state.sessionOnOrBreak = !state.sessionOnOrBreak;
    }
  }
})

export const { setSessionTime, setBreakTime, startSessionTime, startBreakTime, startRunning, pauseRunning, changeStatus } = timeCountSlice.actions;

export default timeCountSlice.reducer;