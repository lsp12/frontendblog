import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import sumifruLogo from '../../../assets/Image/sumifruLogo.png';
import { useAppSelector } from '../../Store/Hook';

export const SideBar = () => {
  const { authethicated } = useAppSelector(( state ) => state.authSlice );
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12} md={12}>
            <img src={sumifruLogo} alt="logo" width="100%" />
          </Grid>
          <Grid item xs={12} md={12}>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'rgb(230,44,53)' }}>
              <Typography variant="body1">
                Home
              </Typography>
            </NavLink>
          </Grid>
          {authethicated && (
            <Grid item xs={12} md={12}>
              <NavLink to="/mypost" style={{ textDecoration: 'none', color: 'rgb(230,44,53)' }}>
                <Typography variant="body1">
                  Ver mis publicaciones
                </Typography>
              </NavLink>
            </Grid>
          )}

          <Grid item xs={12} md={12}>
            <NavLink to="/range" style={{ textDecoration: 'none', color: 'rgb(230,44,53)' }}>
              <Typography variant="body1">
                Busca publicaciones por filtro
              </Typography>
            </NavLink>
          </Grid>

          <Grid item xs={12} md={12}>
            <NavLink to="/profile" style={{ textDecoration: 'none', color: 'rgb(230,44,53)' }}>
              <Typography variant="body1">
                Mi cuenta
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
