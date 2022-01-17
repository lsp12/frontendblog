import { createSlice } from '@reduxjs/toolkit';
import { IComent, IGetComent } from '../../Interface/rest.interface';
import { getComentsController } from './Conments.reducer';

interface IComentsSlice{
  coments: IComent[];
  loading: boolean;
  getComents: IGetComent[];
}

const initialState: IComentsSlice = {
  coments: [],
  loading: false,
  getComents: [],
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
        state.getComents = action.payload!;
        state.loading = false;
      })
      .addCase( getComentsController.rejected, ( state ) => {
        state.getComents = [];
        state.loading = false;
      });
  },
});

export default comentsSlice.reducer;
