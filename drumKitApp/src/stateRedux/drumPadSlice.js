import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crashSymbal: { name: 'Crash Symbal', type: "crashSymbal", key: 'q' },
  hitHatMuted: { name: 'Hit-Hat Closed', type: "hitHat-muted", key: 'w' },
  hitHatOpen: { name: 'Hit-Hat Open', type: "hitHat-open", key: 'e' },
  kickMuted: { name: 'Kick Muted', type: "kick-muted", key: 'a' },
  kickOpen: { name: 'Kick Open', type: "kick-open", key: 's' },
  snareMuted: { name: 'Snare Muted', type: "snare-muted", key: 'd' },
  snareOpen: { name: 'Snare Open', type: "snare-open", key: 'z' },
  tom1: { name: 'Tom 1', type: "tom-1", key: 'x' },
  tom2: { name: 'Tom 2', type: "tom-2", key: 'c' }
};

export const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {
    changeShortCut: (state, action) => {
      const { stateInx, newKey } = action.payload;
      const drum = Object.values(state)[stateInx];
      if (drum) {
        drum.key = newKey;
      }
    }
  }
});

export const { changeShortCut } = drumPadSlice.actions;

export default drumPadSlice.reducer;
