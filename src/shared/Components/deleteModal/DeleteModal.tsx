import { Button, DialogActions, DialogContent } from '@mui/material';
import React from 'react';
import { DeleteModalReducer } from '../../Store/ActionApp/app.slice';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';

export const DeleteModal = () => {
  const { openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  return (

    <>
      <DialogContent>
        Quieres eliminar esta publicacion?
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch( DeleteModalReducer( !openDeleteModal ))}>Disagree</Button>
        <Button onClick={() => dispatch( DeleteModalReducer( !openDeleteModal ))}>Agree</Button>
      </DialogActions>
    </>
  );
};
