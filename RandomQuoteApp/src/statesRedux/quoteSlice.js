import { createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "./fetchQuoteSlice";

const initialState = {
  quote: '',
  author: '',
  loading: false,
  error: null
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload[0].quote;
        state.author = action.payload[0].author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed Please Try Again';
      });
  }
});

export default quoteSlice.reducer;
