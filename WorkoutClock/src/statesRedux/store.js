import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from './lengthSlice';

export const store = configureStore({
  reducer: {
    length: lengthReducer
  }
})