import { configureStore } from '@reduxjs/toolkit';
import lengthReducer from './lengthSlice';
import timeCountReducer from './timeCountSlice';

export const store = configureStore({
  reducer: {
    length: lengthReducer,
    timeCount: timeCountReducer
  }
})