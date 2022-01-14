import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openModal: ( state, action:PayloadAction<boolean> ) => {
      state.modalOpen = action.payload;
    },
  },
});

export const { openModal } = appSlice.actions;
export default appSlice.reducer;
