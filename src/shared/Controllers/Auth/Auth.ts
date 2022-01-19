/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Cookies from 'js-cookie';
import { IRegister } from '../../../Module/Register/interface/interface';
import { IUsers } from '../../Interface/rest.interface';

/* const api = 'https://blogsumifru.herokuapp.com'; */
const api = 'http://localhost:4000';

export const login = async ( email:string, password:string ):Promise<any> => {
  const res = await axios.get( `${api}/users/login/${email}/${password}` );
  return res.data;
};

export const register = async ( data:IRegister ):Promise<any> => {
  const {
    nombre, email, password, position,
  } = data;

  const res = await axios.post( `${api}/users`, {
    nameUser: nombre,
    email,
    password,
    position,
  });
  return res.data;
};

export const onlyUser = async ():Promise<IUsers> => {
  const token = Cookies.get( 'token' );
  const res = await axios.get( `${api}/users/onlyuser`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  return res.data;
};
