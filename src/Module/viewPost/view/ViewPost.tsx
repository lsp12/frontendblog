import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { openComents, openCrearComent } from '../../../shared/Store/ActionApp/app.slice';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { Comments } from '../Components/Comments/Comments';
import { MyComent } from '../Components/MyComent/MyComent';

export const ViewPost = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { comments } = useAppSelector(( state ) => state.appSlice );
  const { crearComent } = useAppSelector(( state ) => state.appSlice );
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={12}>
        <Card sx={{ boxShadow: 5 }}>
          <CardContent>
            <Box>
              <Typography variant="subtitle2">
                date the post was created
              </Typography>
            </Box>
            <Box>
              <Typography variant="h2">
                titulo de la publicacion
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                author
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, sunt repellat. Ea, voluptate ad debitis nemo perspiciatis deleniti repellendus facilis mollitia vel cumque recusandae blanditiis earum, quo, iste hic corporis.
              </Typography>
            </Box>
            {' '}
            {params.id}
          </CardContent>
          <CardActions>
            <Button onClick={() => {
              dispatch( openComents( !comments ));
            }}
            >
              Cargar Comentarios
            </Button>
            <Button onClick={() => {
              dispatch( openCrearComent( !crearComent ));
            }}
            >
              Escribir un comentario
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {crearComent && (
        <Grid item xs={12} md={12} sx={{ pt: '1em' }}>
          <MyComent />
        </Grid>
      )}
      {comments && (
        data.map(( id ) => (
          <Grid key={id} item xs={12} md={12} sx={{ pt: '1em' }}>
            <Comments />
          </Grid>
        ))
      )}

    </Grid>
  );
};
