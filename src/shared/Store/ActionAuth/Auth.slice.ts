import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { loginReducer, RegisterReducer } from './Auth.reducer';

interface IAuthSlice {
  register: boolean;
  token: string | null;
  authethicated: boolean;
}

const initialState: IAuthSlice = {
  register: false,
  token: '',
  authethicated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getToken: ( state ) => {
      const token = Cookies.get( 'token' );
      if ( token ) {
        state.authethicated = true;
      } else {
        state.authethicated = false;
      }
    },
  },
  extraReducers: ( builder ) => {
    builder.addCase( RegisterReducer.fulfilled, ( state ) => {
      state.register = true;
    });
    builder.addCase( loginReducer.pending, ( state ) => {
      state.authethicated = false;
    })
      .addCase( loginReducer.fulfilled, ( state ) => {
        state.authethicated = true;
      });
  },
});

export const {
  getToken,
} = authSlice.actions;
export default authSlice.reducer;
