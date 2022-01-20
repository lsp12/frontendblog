import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { CardComp } from '../../../shared/Components/Card/Card';
import { useAppSelector } from '../../../shared/Store/Hook';
import CustomDay from '../components/calendar';

export const PostRange = () => {
  const { posts } = useAppSelector(( state ) => state.postSlice );
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} md={5} pr="1em" pb="1em">
        <Card sx={{ boxShadow: 2 }}>
          <CardContent>
            <CustomDay />
          </CardContent>
        </Card>
      </Grid>
      <Grid container xs={12} md={6} spacing={2}>
        {posts && posts.length > 0 ? posts.map(( Data, index ) => (
          <Grid key={index.toString()} item xs={12} md={12}>
            <CardComp data={Data} />
          </Grid>
        )) : (
          <Grid item xs={12} md={12}>
            <p>No hay post en ese rango de semanas</p>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
