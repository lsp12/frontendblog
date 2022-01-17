import axios from 'axios';
import Cookies from 'js-cookie';
import { ICreatePost } from '../../../Module/Home/interface/interface';
import { IPost, IUpdatePost } from '../../Interface/rest.interface';

const api = 'https://blogsumifru.herokuapp.com/';

/* export const createPost = async ( post:IPost ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.post( `${api}/post-blog`, post, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
}; */

export const getPostAll = async ( ):Promise<IPost[]> => {
  const token = Cookies.get( 'token' );
  const res = await axios.get( `${api}/post-blog`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const getPost = async ( id:string ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.get( `${api}/post-blog/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const createPost = async ( post:ICreatePost ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.post( `${api}/post-blog`, post, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const myPost = async ( ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.get( `${api}/post-blog/postmy/5`, {
    headers: {
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const deletePost = async ( id:string ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.delete( `${api}/post-blog/${id}`, {
    headers: {
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const updatePost = async ( data:IUpdatePost ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.put( `${api}/post-blog/${data._id}`, data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};
