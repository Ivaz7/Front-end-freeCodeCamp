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
      const { val, op } = action.payload;

      const newVal = String(val);
      
      if (op === true) {
        const valLast = state.equation[state.equation.length - 1];

        if (valLast === "+" || valLast === "-" || valLast === "/" || valLast === "*") {
          return;
        }

        state.equation.push(newVal);
        state.value = ''
        return;
      }

      if (newVal === ".") {
        if (state.value === "") {
          return;
        }

        if (state.value.split('').includes(".")) {
          return
        }
      }
      
      state.value += newVal;
      state.equation.push(val);
    },
    changeAswer: (state) => {
      state.answer = evaluate(state.equation.join(''));
      state.equation = [];
      state.equation.push(state.answer);
      state.value = '';
    },
    reset: (state) => {
      state.value = '';
      state.answer = 0;
      state.equation = [];
    }
  }
});

export const { addValue, changeAswer, reset } = answerSlice.actions;

export default answerSlice.reducer;
