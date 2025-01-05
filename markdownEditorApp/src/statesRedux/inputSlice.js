import { createSlice } from "@reduxjs/toolkit";
import DOMPurify from 'dompurify';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
});

const initialState = {
  rawInput: '# Welcome!!\n## Try Write Here!!', 
  preview: DOMPurify.sanitize(marked('# Welcome!!\n## Try Write Here!!')), 
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.rawInput = action.payload; 
      const dirtyHTML = marked(action.payload); 
      state.preview = DOMPurify.sanitize(dirtyHTML);
    },
  },
});

export const { changeInput } = inputSlice.actions;

export default inputSlice.reducer;
