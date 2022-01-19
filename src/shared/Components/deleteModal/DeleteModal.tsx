import { Button, DialogActions, DialogContent } from '@mui/material';
import React from 'react';
import useInitialFormState from '../../Hooks/useInitialState';
import { DeleteModalReducer } from '../../Store/ActionApp/app.slice';
import { deletePostController } from '../../Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';

export const DeleteModal = ( ) => {
  const { openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const data = useInitialFormState();
  const dispatch = useAppDispatch();
  const DeletePost = () => {
    dispatch( deletePostController( data.id ));
    dispatch( DeleteModalReducer( !openDeleteModal ));
  };
  return (

    <>
      <DialogContent>
        Quieres eliminar esta publicacion?
        {' '}
        {data.title}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch( DeleteModalReducer( !openDeleteModal ))}>Cancelar</Button>
        <Button onClick={() => DeletePost()}>Eliminar</Button>
      </DialogActions>
    </>
  );
};
