import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from 'mathjs';

const initialState = {
  value: [],
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

      if (newVal === "C") {
        if (state.answer) {
          String(state.answer).split('').forEach((num) => {
            state.value.push(num)
          })
          state.answer = 0;
        }

        state.equation.pop();
        state.value.pop();
        return;
      }

      // i feel like the last test of freecodecamp doesn't apply how calculator works
      
      if (op === true) {
        const valLast = state.equation[state.equation.length - 1];
        const valSecLast = state.equation[state.equation.length - 2];

        if (valLast === "-" && (newVal === "+" || newVal === "/" || newVal === "*")) {
          console.log("udin")
          return;
        }

        if (newVal === "-") {
          if (valLast === "-" && valSecLast === "-" || valSecLast === "+" || valSecLast === "/" || valSecLast === "-") {
            return;
          }

          state.equation.push(newVal);
          state.value = []
          return;
        }

        if (valLast === "+"|| valLast === "/" || valLast === "*") {
          return;
        }

        state.equation.push(newVal);
        state.value = []
        return;
      }
      
      if (newVal === "0") {
        if (state.value.length === 0) {
          return;
        }

        if (state.value.includes("0")) {
          return
        }
      }

      if (newVal === ".") {
        if (state.value.length === 0) {
          return;
        }

        if (state.value.includes(".")) {
          return
        }
      }
      
      state.value.push(newVal);
      state.equation.push(val);
    },
    changeAswer: (state) => {
      state.answer = evaluate(state.equation.join(''));
      state.equation = [];
      state.equation.push(state.answer);
      state.value = [];
    },
    reset: (state) => {
      state.value = [];
      state.answer = 0;
      state.equation = [];
    }
  }
});

export const { addValue, changeAswer, reset } = answerSlice.actions;

export default answerSlice.reducer;
