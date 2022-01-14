import { Grid, Typography } from '@mui/material';
import React from 'react';

const User = () => (
  <Grid
    container
    direction="row"
    justifyContent="center"
    spacing={3}
    alignItems="center"
  >
    <Grid item xs={12}>
      <h1>Cargo</h1>
    </Grid>
    <Grid item xs={6} md={12}>
      <Typography variant="h6">
        Informacion de cuenta
      </Typography>
    </Grid>
    <Grid item xs={6} md={12}>
      <Typography variant="h6">
        Nombre de usuario
        <br />
        jonahhan
      </Typography>
    </Grid>
    <Grid item xs={6} md={12}>
      <Typography variant="h6">
        Correo de asociado
        <br />
        jonahhan@
      </Typography>
    </Grid>
    <Grid item xs={6} md={12}>
      <Typography variant="h6">
        Cargo
        <br />
        Cargo aun pendiente de verificar
      </Typography>
    </Grid>
  </Grid>
);

export default User;
