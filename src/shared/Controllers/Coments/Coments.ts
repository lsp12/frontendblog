import axios from 'axios';
import Cookies from 'js-cookie';
import { ICreatePost, IGetComent } from '../../Interface/rest.interface';

const api = 'https://blogsumifru.herokuapp.com';
/* const api = 'http://localhost:4000'; */

export const getConments = async ( id:string ):Promise<IGetComent[]> => {
  const token = Cookies.get( 'token' );
  const res = await axios.get( `${api}/coments/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const createComent = async ( coment:ICreatePost ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.post( `${api}/coments`, coment, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};

export const deleteComent = async ( id:string ) => {
  const token = Cookies.get( 'token' );
  const res = await axios.delete( `${api}/coments/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `${token}`,
    },
  });
  return res.data;
};
