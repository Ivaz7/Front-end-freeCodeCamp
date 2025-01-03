import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
  'data/fetchQuote',
  async (_, thunk) => {
    try {
      const response = await fetch('https://dummyjson.com/quotes/random/1');
      if (!response.ok) {
        throw new Error('Failed Please Try Again');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error:', error); 
      return thunk.rejectWithValue(error.message || 'An unknown error occurred');
    }
  }
);
;
