import { Grid, Typography } from '@mui/material';
import React from 'react';
import { CardComp } from '../../../shared/Components/Card/Card';
import { DeleteModal } from '../../../shared/Components/deleteModal/DeleteModal';
import { FormCreatePost } from '../../../shared/Components/Form/Form';
import FormDialog from '../../../shared/Components/modal/Modal';
import { DeleteModalReducer, openModal } from '../../../shared/Store/ActionApp/app.slice';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';

export const MyPost = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { modalOpen, openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={12}>
        <Typography variant="h6">
          Mis publicaciones
        </Typography>
      </Grid>
      {data.map(( id ) => (
        <Grid key={id} item xs={12} md={6}>
          <CardComp profile id={id} />
        </Grid>
      ))}

      <FormDialog
        open={openDeleteModal}
        closeFunction={() => dispatch( DeleteModalReducer( !openDeleteModal ))}
        title="Eliminar publicacion"
      >
        <DeleteModal />
      </FormDialog>

      <FormDialog
        open={modalOpen}
        closeFunction={() => dispatch( openModal( !modalOpen ))}
        title="Editar post"
      >
        <FormCreatePost />
      </FormDialog>
    </Grid>
  );
};
