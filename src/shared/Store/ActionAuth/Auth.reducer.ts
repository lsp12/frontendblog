import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { ILogin } from '../../../Module/Login/interface/Interface';
import { IRegister } from '../../../Module/Register/interface/interface';
import { login, register } from '../../Controllers/Auth/Auth';

export const loginReducer = createAsyncThunk( 'Auth/login',
  async ( data:ILogin ) => {
    try {
      const res = await login( data.email, data.password );
      Cookies.set( 'token', res );
      return res;
    } catch ( error:any ) {
      const { ...rest } = error;
      console.log( rest );
    }
  });

export const RegisterReducer = createAsyncThunk( 'Auth/Register',
  async ( data:IRegister ) => {
    try {
      const res = await register( data );
      console.log( res );
    } catch ( error ) {
      console.log( error );
    }
  });
