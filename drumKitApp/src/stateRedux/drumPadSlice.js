import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crashSymbal: {
    type: "crashSymbal",
    key: 'q'
  },
  hitHatMuted: {
    type: "hitHat-muted",
    key: 'w'
  },
  hitHatOpen: {
    type: "hitHat-open",
    key: 'e'
  },
  kickMuted: {
    type: "kick-muted",
    key: 'a'
  },
  kickOpen: {
    type: "kick-open",
    key: 's'
  },
  snareMuted: {
    type: "snare-muted",
    key: 'd'
  },
  snareOpen: {
    type: "snare-open",
    key: 'z'
  },
  tom1: {
    type: "tom-1",
    key: 'x'
  },
  tom2: {
    type: "tom-2",
    key: 'c'
  },
  volume: 0.5
}

export const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {}
})

export default drumPadSlice.reducer;