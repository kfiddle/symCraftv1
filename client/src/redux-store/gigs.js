import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allGigs: [],
};

const gigsSlice = createSlice({
  name: "gigs",
  initialState,
  reducers: {
    refresh(state, action) {
      state.allGigs = action.payload;
    },
  },
});

export const gigsActions = gigsSlice.actions;
export default gigsSlice.reducer;
