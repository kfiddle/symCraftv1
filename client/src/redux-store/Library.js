import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPieces: [],
};

const piecesSlice = createSlice({
  name: 'pieces',
  initialState,
  reducers: {
    refresh(state, action) {
      state.allPieces = action.payload;
    },
  },
});

export const piecesActions = piecesSlice.actions;
export default piecesSlice.reducer;
