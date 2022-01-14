import { Grid, Typography } from '@mui/material';
import React from 'react';
import { CardComp } from '../../../shared/Components/Card/Card';

export const MyPost = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
          <CardComp profile />
        </Grid>
      ))}

    </Grid>
  );
};
