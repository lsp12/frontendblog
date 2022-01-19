import { Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { CardComp } from '../../../shared/Components/Card/Card';
import { DeleteModal } from '../../../shared/Components/deleteModal/DeleteModal';
import { FormCreatePost } from '../../../shared/Components/Form/Form';
import FormDialog from '../../../shared/Components/modal/Modal';
import { DeleteModalReducer, openModal } from '../../../shared/Store/ActionApp/app.slice';
import { myPostController } from '../../../shared/Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';

export const MyPost = () => {
  const { modalOpen, openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const { myPosts } = useAppSelector(( state ) => state.postSlice );
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    if ( token !== undefined ) {
      dispatch( myPostController());
    }
  }, []);
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
      {myPosts && myPosts.length > 0 ? ( myPosts.map(( Data ) => (
        <Grid key={Data.title} item xs={12} md={6}>
          <CardComp profile data={Data} />
        </Grid>
      ))) : (
        <Grid item xs={12} md={3}>
          <input type="image" src="https://avatars.dicebear.com/api/bottts/button.svg" alt="No hay publicaciones" />
          <Typography variant="h6">
            No hay publicaciones tuyas aun
          </Typography>
        </Grid>
      )}

      <FormDialog
        open={modalOpen}
        closeFunction={() => dispatch( openModal( !modalOpen ))}
        title="Editar post"
      >
        <FormCreatePost />
      </FormDialog>

      <FormDialog
        open={openDeleteModal}
        closeFunction={() => dispatch( DeleteModalReducer( !openDeleteModal ))}
        title="Eliminar publicacion"
      >
        <DeleteModal />
      </FormDialog>

    </Grid>
  );
};
