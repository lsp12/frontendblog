import { createAsyncThunk } from '@reduxjs/toolkit';
import { createComent, getConments } from '../../Controllers/Coments/Coments';
import { IComent, ICreatePost } from '../../Interface/rest.interface';

export const getComentsController = createAsyncThunk( 'Coments/getComents', async ( id:string ) => {
  try {
    const res = await getConments( id );
    return res as unknown as IComent[];
  } catch ( error ) {
    console.log( error );
  }
});

export const createComentController = createAsyncThunk( 'Coments/createComent', async ( coment:ICreatePost ) => {
  try {
    const res = await createComent( coment );
    console.log( res as unknown as IComent );
    return res as unknown as IComent;
  } catch ( error ) {
    console.log( error );
  }
});
