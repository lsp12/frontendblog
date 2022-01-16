import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { getPost, getPostAll } from '../../Controllers/Post/Post.controllers';
import { IPost } from '../../Interface/rest.interface';

export const getPosts = createAsyncThunk( 'Post/getPosts', async ( token:string ) => {
  try {
    const res = await getPostAll( token );
    return res as unknown as IPost[];
  } catch ( e:any ) {
    const { ...rest } = e;
    if ( rest.response.data.message === 'Token not valid' ) {
      console.log( 'Token not valid' );
      Cookies.remove( 'token' );
    }
    console.log( rest.response.data.message );
    /* window.location.href = "https://stackoverflow.com/search?q=[js]+" + e.message; */
  }
});

export const getPostController = createAsyncThunk( 'Post/getPost', async ( id:string ) => {
  try {
    const res = await getPost( id );
    return res as unknown as IPost;
  } catch ( error:any ) {
    console.log( error );
  }
});
