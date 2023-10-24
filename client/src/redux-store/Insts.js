import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allInsts: [],
};

const instsSlice = createSlice({
  name: "insts",
  initialState,
  reducers: {
    refresh(state, action) {
      state.allInsts = action.payload;
    },
  },
});

export const instsActions = instsSlice.actions;
export default instsSlice.reducer;
