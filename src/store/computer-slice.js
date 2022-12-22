import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  command: '',
  activeRow: 0,
  activeCol: 0,
  prevCell: { x: 0, y: 0 },
  currentCell: { x: 0, y: 0 },
  galleryDimension: [],
};

function mod(a, n) {
  return a - n * Math.floor(a / n);
}

const ComputerSlice = createSlice({
  name: 'computer',
  initialState: initialState,
  reducers: {
    setCommand: (state, action) => {
      state.command = action.payload;
    },

    setGalleryDimension: (state, action) => {
      state.galleryDimension = action.payload;
    },

    moveUp: (state) => {
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      state.currentCell.x = mod(
        state.currentCell.x - 1,
        state.galleryDimension.length
      );
      state.command = '';
    },
    moveDown: (state) => {
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      state.currentCell.x = mod(
        state.currentCell.x + 1,
        state.galleryDimension.length
      );
      state.command = '';
    },

    moveRight: (state) => {
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      if (
        mod(
          state.currentCell.y + 1,
          state.galleryDimension[state.currentCell.x].size
        ) === 0
      ) {
        state.currentCell.y = 0;
        state.currentCell.x = mod(
          state.currentCell.x + 1,
          state.galleryDimension.length
        );
      } else {
        state.currentCell.y = mod(
          state.currentCell.y + 1,
          state.galleryDimension[state.currentCell.x].size
        );
      }
      state.command = '';
    },

    moveLeft: (state) => {
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      if (
        mod(
          state.currentCell.y - 1,
          state.galleryDimension[state.currentCell.x].size
        ) ===
        state.galleryDimension[state.currentCell.x].size - 1
      ) {
        state.currentCell.y =
          state.galleryDimension[state.currentCell.x].size - 1;
        state.currentCell.x = mod(
          state.currentCell.x - 1,
          state.galleryDimension.length
        );
      } else {
        state.currentCell.y = mod(
          state.currentCell.y - 1,
          state.galleryDimension[state.currentCell.x].size
        );
      }
      state.command = '';
    },
  },
});

export const computerActions = ComputerSlice.actions;
export default ComputerSlice.reducer;
