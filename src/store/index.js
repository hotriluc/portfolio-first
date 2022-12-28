import { configureStore } from '@reduxjs/toolkit';
import computerReducer from './computer-slice';
import uiReducer from './ui-slice';

export const store = configureStore({
  reducer: {
    computer: computerReducer,
    ui: uiReducer,
  },
});
