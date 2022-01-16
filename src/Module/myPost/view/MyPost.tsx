import { Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { CardComp } from '../../../shared/Components/Card/Card';
import { DeleteModal } from '../../../shared/Components/deleteModal/DeleteModal';
import { FormCreatePost } from '../../../shared/Components/Form/Form';
import FormDialog from '../../../shared/Components/modal/Modal';
import { DeleteModalReducer, openModal } from '../../../shared/Store/ActionApp/app.slice';
import { getPosts } from '../../../shared/Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';

export const MyPost = () => {
  const { modalOpen, openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const { posts } = useAppSelector(( state ) => state.postSlice );
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    if ( token !== undefined ) {
      dispatch( getPosts( token ));
      console.log( 'token', token );
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
      {posts.length > 0 && posts.map(( Data ) => (
        <Grid key={Data.title} item xs={12} md={6}>
          <CardComp profile data={Data} />
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
