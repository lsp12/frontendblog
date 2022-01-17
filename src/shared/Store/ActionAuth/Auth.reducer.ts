import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { ILogin } from '../../../Module/Login/interface/Interface';
import { IRegister } from '../../../Module/Register/interface/interface';
import {
  login, onlyUser, register,
} from '../../Controllers/Auth/Auth';
import { getToken } from './Auth.slice';

export const loginReducer = createAsyncThunk( 'Auth/login',
  async ( data:ILogin ) => {
    try {
      const res = await login( data.email, data.password );
      Cookies.set( 'token', res );
      toast.success( 'logueado correctamente' );
      return true;
    } catch ( error:any ) {
      const { ...rest } = error;
      if ( rest.response.data.message === 'Password not valid' ) {
        toast.error( 'contraseña incorrecta' );
      }
      console.log( rest );
    }
  });

export const RegisterReducer = createAsyncThunk( 'Auth/Register',
  async ( data:IRegister ) => {
    try {
      const res = await register( data );
      toast.success( 'Registro exitoso a hora inicia sesion' );
      return res;
    } catch ( error:any ) {
      const { ...rest } = error;
      console.log( rest.response.data.message );
      if ( rest.response.data.message === 'Email already exist' ) {
        toast.error( 'Correo electronico ya se encuentra registrado intenta con otro' );
      }
      console.log( rest );
      toast.error( 'Error' );
    }
  });

export const userReducer = createAsyncThunk( 'Auth/user',
  async ( _, { dispatch }) => {
    try {
      const res = await onlyUser( );
      return res;
    } catch ( error:any ) {
      const { ...rest } = error;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });
