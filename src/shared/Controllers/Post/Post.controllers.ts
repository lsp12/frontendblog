import axios from 'axios';
import Cookies from 'js-cookie';
import { IPost } from '../../Interface/rest.interface';

const api = 'http://localhost:4000';

export const createPost = async ( post:IPost ) => {
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

export const getPostAll = async ( toke:string ):Promise<IPost[]> => {
  const res = await axios.get( `${api}/post-blog`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${toke}`,
    },
  });
  console.log( res );
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
