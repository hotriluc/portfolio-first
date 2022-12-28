import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
};

const UiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setIsLoaded: (state) => {
      state.isLoaded = true;
    },
  },
});

export const uiActions = UiSlice.actions;
export default UiSlice.reducer;
