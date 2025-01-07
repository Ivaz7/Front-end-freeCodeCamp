import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  answer: 0,
  equation: ''
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.equation += action.payload;
    },
    changeAswer: (state) => {
      state.answer = eval(state.equation);
      state.equation = ''
      state.equation += state.answer
    },
    changeVal : (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0
      state.answer = 0
      state.equation = ''
    }
  }
})

export const { addValue, changeAswer, changeVal, reset } = answerSlice.actions;

export default answerSlice.reducer;