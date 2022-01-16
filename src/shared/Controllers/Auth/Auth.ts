import axios from 'axios';
import { IRegister } from '../../../Module/Register/interface/interface';

const api = 'http://localhost:4000';
/* 61df6cf7aacfbd4c3d36b085 */
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
  console.log( res );
  return res.data;
};
