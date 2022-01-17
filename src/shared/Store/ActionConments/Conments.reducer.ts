import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { createComent, deleteComent, getConments } from '../../Controllers/Coments/Coments';
import { IComent, ICreatePost, IGetComent } from '../../Interface/rest.interface';
import { getToken } from '../ActionAuth/Auth.slice';

export const getComentsController = createAsyncThunk( 'Coments/getComents', async ( id:string, { dispatch }) => {
  try {
    const res = await getConments( id );
    return res as unknown as IGetComent[];
  } catch ( error:any ) {
    const { ...rest } = error;
    if ( rest.response.data.message === 'Token not valid' ) {
      console.log( 'Token not valid' );
      Cookies.remove( 'token' );
      dispatch( getToken( ));
    }
  }
});

export const createComentController = createAsyncThunk( 'Coments/createComent',
  async ( coment:ICreatePost, { dispatch }) => {
    try {
      const res = await createComent( coment );
      dispatch( getComentsController( coment.postBlogId ));
      return res as unknown as IComent;
    } catch ( error:any ) {
      const { ...rest } = error;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });

export const deleteComentController = createAsyncThunk( 'Coments/deleteComent',
  async ( coment:IGetComent, { dispatch }) => {
    try {
      if ( coment._id ) {
        await deleteComent( coment._id );
      }
      dispatch( getComentsController( coment.postBlogId ));
    } catch ( error:any ) {
      const { ...rest } = error;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });
