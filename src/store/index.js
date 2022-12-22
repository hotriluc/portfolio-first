import { configureStore } from '@reduxjs/toolkit';
import computerReducer from './computer-slice';

export const store = configureStore({
  reducer: {
    computer: computerReducer,
  },
});
