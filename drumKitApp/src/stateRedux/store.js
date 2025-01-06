import { configureStore } from '@reduxjs/toolkit';
import drumPadReducer from './drumPadSlice.js';

export const store = configureStore({
  reducer: {
    drumPad: drumPadReducer
  }
})