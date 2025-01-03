import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from './quoteSlice.js';
import bgTextReducer from './bgTextSlice.js';

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    bgText: bgTextReducer
  }
})