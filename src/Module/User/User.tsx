import { Grid, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { Avatar } from '../../shared/Hooks/useToken';
import { useAppSelector } from '../../shared/Store/Hook';

const User = () => {
  const { dataUser } = useAppSelector(( state ) => state.authSlice );

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      spacing={3}
      alignItems="center"
    >
      <Grid item xs={12} md={6}>

        <input type="image" src={Avatar( dataUser?.nameUser )} alt="avatar" />

      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container>
          <h1>{dataUser?.position}</h1>
          <Grid item xs={6} md={12}>
            <Typography variant="h6">
              Informacion de cuenta
            </Typography>
          </Grid>
          <Grid item xs={6} md={12}>
            <Typography variant="h6">
              Nombre de usuario
              <br />
              {dataUser?.nameUser}
            </Typography>
          </Grid>
          <Grid item xs={6} md={12}>
            <Typography variant="h6">
              Correo de asociado
              <br />
              {dataUser?.email}
            </Typography>
          </Grid>
          <Grid item xs={6} md={12}>
            <Typography variant="h6">
              Cuenta Creada el:
              <br />
              {moment( dataUser?.createdAt ).locale( 'es' ).format( 'LL' )}
            </Typography>
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );
};

export default User;
