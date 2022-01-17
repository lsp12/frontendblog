import {
  Box,
  FormControl, Grid, Input, InputAdornment, InputLabel, Skeleton,
} from '@mui/material';
import React, { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Cookies from 'js-cookie';
import { CardComp } from '../../../shared/Components/Card/Card';
import { SpeedDialComp } from '../../../shared/Components/SpeedDial/SpeedDial';
import FormDialog from '../../../shared/Components/modal/Modal';
import { FormCreatePost } from '../../../shared/Components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { openModal } from '../../../shared/Store/ActionApp/app.slice';
import { getPosts } from '../../../shared/Store/ActionPost/Post.reducer';

export const Home = () => {
  const { modalOpen } = useAppSelector(( state ) => state.appSlice );
  const { posts, loading } = useAppSelector(( state ) => state.postSlice );
  const { authethicated } = useAppSelector(( state ) => state.authSlice );
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    if ( token !== undefined ) {
      dispatch( getPosts());
    }
  }, [token, authethicated, dispatch]);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box display="flex" justifyContent="right">
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Buscar una publicacion
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              fullWidth
              startAdornment={(
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )}
            />
          </FormControl>
          <FormDialog
            open={modalOpen}
            closeFunction={() => dispatch( openModal( !modalOpen ))}
            title="Crear publicacion"
          >
            <FormCreatePost />
          </FormDialog>
        </Box>
      </Grid>
      {loading && (
        skeleton.map(( Data ) => (
          <Grid key={Data} item xs={12} md={6}>
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Grid>
        )))}
      {posts && posts.length > 0 && posts.map(( Data ) => (
        <Grid key={Data.title} item xs={12} md={6}>
          <CardComp data={Data} />
        </Grid>
      ))}
      <SpeedDialComp />
    </Grid>

  );
};
