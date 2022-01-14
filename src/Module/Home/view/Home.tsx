import {
  Box,
  FormControl, Grid, Input, InputAdornment, InputLabel,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { CardComp } from '../../../shared/Components/Card/Card';
import { SpeedDialComp } from '../../../shared/Components/SpeedDial/SpeedDial';

export const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
        </Box>
      </Grid>

      {data.map(( id ) => (
        <Grid key={id} item xs={12} md={6}>
          <CardComp />
        </Grid>
      ))}
      <SpeedDialComp />
    </Grid>

  );
};
