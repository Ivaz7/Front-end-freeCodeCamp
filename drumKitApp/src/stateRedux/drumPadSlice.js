import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crashSymbal: { name: 'Crash Symbal', type: "crashSymbal", key: 'q', picked: false },
  hitHatMuted: { name: 'Hit-Hat Closed', type: "hitHat-muted", key: 'w', picked: false },
  hitHatOpen: { name: 'Hit-Hat Open', type: "hitHat-open", key: 'e', picked: false },
  kickMuted: { name: 'Kick Muted', type: "kick-muted", key: 'a', picked: false },
  kickOpen: { name: 'Kick Open', type: "kick-open", key: 's', picked: false },
  snareMuted: { name: 'Snare Muted', type: "snare-muted", key: 'd', picked: false },
  snareOpen: { name: 'Snare Open', type: "snare-open", key: 'z', picked: false },
  tom1: { name: 'Tom 1', type: "tom-1", key: 'x', picked: false },
  tom2: { name: 'Tom 2', type: "tom-2", key: 'c', picked: false }
};

export const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {
    changeShortCut: (state, action) => {
      const { stateInx, newKey } = action.payload;
        Object.keys(state).forEach(key => {
        if (state[key].name === stateInx) {
          state[key].key = newKey; 
        }
      });
    },
    changePicked: (state, action) => {
      const { stateInx } = action.payload;
      Object.keys(state).forEach(key => {
        if (state[key].name !== stateInx) {
          state[key].picked = !state[key].picked; 
        }
      });
    }    
  }
});

export const { changeShortCut, changePicked } = drumPadSlice.actions;

export default drumPadSlice.reducer;
