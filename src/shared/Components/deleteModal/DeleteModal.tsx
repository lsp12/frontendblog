import { Button, DialogActions, DialogContent } from '@mui/material';
import React from 'react';
import { DeleteModalReducer } from '../../Store/ActionApp/app.slice';
import { deletePostController } from '../../Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';

interface DeleteModalProps {
  id: string;
  title: string;
}

export const DeleteModal = ({ id, title }:DeleteModalProps ) => {
  const { openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  const DeletePost = () => {
    dispatch( deletePostController( id ));
    dispatch( DeleteModalReducer( !openDeleteModal ));
  };
  return (

    <>
      <DialogContent>
        Quieres eliminar esta publicacion?
        {' '}
        {title}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch( DeleteModalReducer( !openDeleteModal ))}>Cancelar</Button>
        <Button onClick={() => DeletePost()}>Eliminar</Button>
      </DialogActions>
    </>
  );
};
