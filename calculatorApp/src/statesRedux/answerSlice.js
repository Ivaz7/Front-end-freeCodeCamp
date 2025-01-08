import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from 'mathjs';

const initialState = {
  value: '',
  answer: 0,
  equation: []
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addValue: (state, action) => {
      const { val } = action.payload;

      if (val === '.' && state.value.includes('.')) {
        return;
      }

      state.equation.push(val);
    },
    changeAswer: (state) => {
      state.answer = evaluate(state.equation.join(''));
      state.equation = [];
      state.equation.push(state.answer);
      state.value = '';
    },
    changeVal: (state, action) => {
      const { val, op } = action.payload;

      const newVal = String(val);

      if (op === true) {
        state.value = ''
        return
      }

      if (newVal === '.' && state.value.includes('.')) {
        return; 
      }

      state.value += newVal;
    },
    reset: (state) => {
      state.value = '';
      state.answer = 0;
      state.equation = [];
    }
  }
});

export const { addValue, changeAswer, changeVal, reset } = answerSlice.actions;

export default answerSlice.reducer;
