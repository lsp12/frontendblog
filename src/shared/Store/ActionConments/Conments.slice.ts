import { createSlice } from '@reduxjs/toolkit';
import { IComent } from '../../Interface/rest.interface';
import { createComentController, getComentsController } from './Conments.reducer';

interface IComentsSlice{
  coments: IComent[];
  loading: boolean;
}

const initialState: IComentsSlice = {
  coments: [],
  loading: false,
};

const comentsSlice = createSlice({
  name: 'coments',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( getComentsController.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getComentsController.fulfilled, ( state, action ) => {
        state.coments = action.payload!;
        state.loading = false;
      })
      .addCase( getComentsController.rejected, ( state ) => {
        state.coments = [];
        state.loading = false;
      });
    builder
      .addCase( createComentController.fulfilled, ( state, action ) => {
        state.coments.unshift( action.payload! );
      });
  },
});

export default comentsSlice.reducer;
