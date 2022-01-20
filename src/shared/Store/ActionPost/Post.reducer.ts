import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { ICreatePost } from '../../../Module/Home/interface/interface';
import { IPostRange } from '../../../Module/PostRander/Interface/Interface';
import {
  createPost, deletePost, findByEmailOrNameOrTitle, findForRangeDate, getPost, getPostAll, myPost, updatePost,
} from '../../Controllers/Post/Post.controllers';
import { IPost, IUpdatePost } from '../../Interface/rest.interface';
import { getToken } from '../ActionAuth/Auth.slice';

export const getPosts = createAsyncThunk( 'Post/getPosts',
  async ( _, { dispatch }) => {
    try {
      const res = await getPostAll( );
      return res as unknown as IPost[];
    } catch ( e:any ) {
      const { ...rest } = e;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    /* window.location.href = "https://stackoverflow.com/search?q=[js]+" + e.message; */
    }
  });

export const getPostController = createAsyncThunk( 'Post/getPost', async ( id:string, { dispatch }) => {
  try {
    const res = await getPost( id );
    return res as unknown as IPost;
  } catch ( error:any ) {
    const { ...rest } = error;
    if ( rest.response.data.message === 'Token not valid' ) {
      console.log( 'Token not valid' );
      Cookies.remove( 'token' );
      dispatch( getToken( ));
    }
  }
});

export const createPostController = createAsyncThunk( 'Post/getPost', async ( post:ICreatePost, { dispatch }) => {
  try {
    const res = await createPost( post );
    dispatch( getPosts());
    return res as unknown as IPost;
  } catch ( error:any ) {
    const { ...rest } = error;
    if ( rest.response.data.message === 'Token not valid' ) {
      console.log( 'Token not valid' );
      Cookies.remove( 'token' );
      dispatch( getToken( ));
    }
  }
});

export const myPostController = createAsyncThunk( 'Post/myPosts',
  async ( _, { dispatch }) => {
    try {
      const res = await myPost( );
      return res as unknown as IPost[];
    } catch ( e:any ) {
      const { ...rest } = e;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });

export const deletePostController = createAsyncThunk( 'Post/deletePost',
  async ( id:string, { dispatch }) => {
    try {
      const res = await deletePost( id );
      dispatch( myPostController());
      return res;
    } catch ( e:any ) {
      const { ...rest } = e;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });

export const UpdatePostController = createAsyncThunk( 'Post/updatePost',
  async ( post:IUpdatePost, { dispatch }) => {
    try {
      const res = await updatePost( post );
      dispatch( myPostController());
      return res as unknown as IPost;
    } catch ( e:any ) {
      const { ...rest } = e;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });

export const SearchPostController = createAsyncThunk( 'Post/searchPost',
  async ( search:string, { dispatch }) => {
    try {
      const res = await findByEmailOrNameOrTitle( search );
      toast.success( 'Resultados encontrados' );
      return res as unknown as IPost[];
    } catch ( e:any ) {
      const { ...rest } = e;
      switch ( rest.response.data.message ) {
        case 'Token not valid':
          toast.error( 'Token not valid' );
          Cookies.remove( 'token' );
          dispatch( getToken( ));
          break;
        case 'PostBlog not found':
          toast.error( 'publicacion no encontrada' );
          break;
        default:
          toast.error( 'Error' );
          break;
      }
      console.log( e );
    }
  });

export const getPostRangeController = createAsyncThunk( 'Post/getPostRange',
  async ( range:IPostRange, { dispatch }) => {
    try {
      const res = await findForRangeDate( range );
      return res as unknown as IPost[];
    } catch ( e:any ) {
      const { ...rest } = e;
      if ( rest.response.data.message === 'Token not valid' ) {
        console.log( 'Token not valid' );
        Cookies.remove( 'token' );
        dispatch( getToken( ));
      }
    }
  });
