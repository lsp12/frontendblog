import {
  Box,
  Grid, Skeleton,
} from '@mui/material';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { CardComp } from '../../../shared/Components/Card/Card';
import { SpeedDialComp } from '../../../shared/Components/SpeedDial/SpeedDial';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { getPosts } from '../../../shared/Store/ActionPost/Post.reducer';
import { FormSearch } from '../components/FormSearch';

export const Home = () => {
  const { posts, loading } = useAppSelector(( state ) => state.postSlice );
  const { authethicated } = useAppSelector(( state ) => state.authSlice );
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    dispatch( getPosts());
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
        <Box display="flex" justifyContent="right" />
        <FormSearch />
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
      {authethicated && (
        <SpeedDialComp />
      )}

    </Grid>

  );
};
