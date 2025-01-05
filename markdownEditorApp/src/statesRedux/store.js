import { configureStore } from '@reduxjs/toolkit';
import inputSliceReducer from './inputSlice';

export const store = configureStore({
  reducer: {
    input: inputSliceReducer
  } 
})