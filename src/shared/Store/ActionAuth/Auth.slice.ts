import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { IUsers } from '../../Interface/rest.interface';
import { loginReducer, RegisterReducer, userReducer } from './Auth.reducer';

interface IAuthSlice {
  register: boolean;
  token: string | null;
  authethicated: boolean;
  dataUser?:IUsers | null;
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
    singOut: ( state ) => {
      state.authethicated = false;
    },
  },
  extraReducers: ( builder ) => {
    builder.addCase( loginReducer.pending, ( state ) => {
      state.authethicated = false;
    })
      .addCase( loginReducer.fulfilled, ( state ) => {
        state.authethicated = true;
      });
    builder
      .addCase( userReducer.fulfilled, ( state, action ) => {
        state.dataUser = action.payload!;
        if ( state.dataUser ) {
          state.authethicated = true;
        } else {
          state.authethicated = false;
        }
      });
    builder
      .addCase( RegisterReducer.pending, ( state ) => {
        state.register = false;
      })
      .addCase( RegisterReducer.fulfilled, ( state, action ) => {
        if ( action.payload === undefined ) {
          state.register = false;
        } else {
          state.register = true;
        }
      })
      .addCase( RegisterReducer.rejected, ( state ) => {
        state.register = false;
      });
  },
});

export const {
  getToken, singOut,
} = authSlice.actions;
export default authSlice.reducer;
