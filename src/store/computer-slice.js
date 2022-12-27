import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  command: '',
  activeRow: 0,
  activeCol: 0,
  prevCell: { x: 0, y: 0 },
  currentCell: { x: 0, y: 0 },
  galleryDimension: [],
  projectIsOpened: false,
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

    openProject: (state) => {
      state.projectIsOpened = !state.projectIsOpened;
    },

    moveUp: (state) => {
      // Save current position as previous
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      // Move to new row
      state.currentCell.x = mod(
        state.currentCell.x - 1,
        state.galleryDimension.length
      );

      // Compare previous cell position with new row size
      if (
        state.prevCell.y >
        state.galleryDimension[state.currentCell.x].size - 1
      ) {
        state.currentCell.y =
          state.galleryDimension[state.currentCell.x].size - 1;
      }

      state.command = '';
    },

    moveDown: (state) => {
      // Save current position as previous
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      // Move to new row
      state.currentCell.x = mod(
        state.currentCell.x + 1,
        state.galleryDimension.length
      );

      // Compare previous cell position with new row size
      if (
        state.prevCell.y >
        state.galleryDimension[state.currentCell.x].size - 1
      ) {
        state.currentCell.y =
          state.galleryDimension[state.currentCell.x].size - 1;
      }

      state.command = '';
    },

    moveRight: (state) => {
      // Save current position as previous
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      // If there are no place to move forward anymore in the row
      // Move to the new row
      if (
        mod(
          state.prevCell.y + 1,
          state.galleryDimension[state.prevCell.x].size
        ) === 0
      ) {
        state.currentCell.x = mod(
          state.currentCell.x + 1,
          state.galleryDimension.length
        );
        state.currentCell.y = 0;
      } else {
        state.currentCell.y = mod(
          state.currentCell.y + 1,
          state.galleryDimension[state.currentCell.x].size
        );
      }

      state.command = '';
    },

    moveLeft: (state) => {
      // Save current position as previous
      state.prevCell = { x: state.currentCell.x, y: state.currentCell.y };

      // If there are no place to move back anymore in the row
      // Move to the new row
      if (
        mod(
          state.prevCell.y - 1,
          state.galleryDimension[state.prevCell.x].size
        ) ===
        state.galleryDimension[state.prevCell.x].size - 1
      ) {
        state.currentCell.x = mod(
          state.currentCell.x - 1,
          state.galleryDimension.length
        );
        state.currentCell.y =
          state.galleryDimension[state.currentCell.x].size - 1;
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
