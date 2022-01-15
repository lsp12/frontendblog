import {
  Dialog, DialogTitle,
} from '@mui/material';

import React from 'react';
import { openModal } from '../../../shared/Store/ActionApp/app.slice';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { FormCreatePost } from '../../../shared/Components/Form/Form';

export const ModalCreatePost = () => {
  const { modalOpen } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch( openModal( !modalOpen ));
  };
  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
      keepMounted
      sx={{
        '.MuiDialog-paper': {
          width: '90%',
          maxWidth: '500px',
        },
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle>Subir un post</DialogTitle>
      <FormCreatePost />
    </Dialog>
  );
};
