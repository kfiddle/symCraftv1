import { configureStore } from '@reduxjs/toolkit';

// import AuthReducer from "./Auth";
import InstsReducer from './Insts';
import PiecesReducer from './Library';

const store = configureStore({
  reducer: { insts: InstsReducer, pieces: PiecesReducer },
});

export default store;
