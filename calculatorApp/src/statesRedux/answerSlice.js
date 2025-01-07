import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
  answer: 0,
  equation: ''
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addValue: (state, action) => {
      const { val, op } = action.payload;

      if (op === true) {
        state.value = ''
      }

      state.equation += val;
    },
    changeAswer: (state) => {
      state.answer = eval(state.equation);
      state.equation = ''
      state.equation += state.answer
      state.value = ''
    },
    changeVal : (state, action) => {
      state.value += String(action.payload);
    },
    reset: (state) => {
      state.value = ''
      state.answer = 0
      state.equation = ''
    }
  }
})

export const { addValue, changeAswer, changeVal, reset } = answerSlice.actions;

export default answerSlice.reducer;