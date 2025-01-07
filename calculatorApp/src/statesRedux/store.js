import { configureStore } from '@reduxjs/toolkit';
import buttonCalReducer from './buttonCalSlice';
import answerReducer from './answerSlice';

export const store = configureStore({
  reducer: {
    buttonCal: buttonCalReducer,
    answer: answerReducer
  }
})