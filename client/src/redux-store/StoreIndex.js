import { configureStore } from '@reduxjs/toolkit';

// import AuthReducer from "./Auth";
import InstsReducer from './Insts';
import PiecesReducer from './Library';
import GigsReducer from './gigs';

const store = configureStore({
  reducer: { insts: InstsReducer, pieces: PiecesReducer, gigs: GigsReducer },
});

export default store;
