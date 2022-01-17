import {
  Box, Button, Card, CardActions, CardContent, CircularProgress, Grid, Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { openComents, openCrearComent } from '../../../shared/Store/ActionApp/app.slice';
import { getComentsController } from '../../../shared/Store/ActionConments/Conments.reducer';
import { getPostController } from '../../../shared/Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { Comments } from '../Components/Comments/Comments';
import { CreateComent } from '../Components/MyComent/CreateComent';

export const ViewPost = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { comments, crearComent } = useAppSelector(( state ) => state.appSlice );
  const { getComents, loading } = useAppSelector(( state ) => state.comentsSlice );
  const { post } = useAppSelector(( state ) => state.postSlice );

  useEffect(() => {
    if ( params.id ) {
      dispatch( getPostController( params.id ));
      dispatch( getComentsController( params.id ));
    }
  }, []);

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
                {moment( post?.createdAt ).locale( 'es-mx' ).format( 'MMMM Do YYYY, h:mm:ss a' )}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h2">
                {post?.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                {post?.userid.nameUser}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                {post?.body}
              </Typography>
            </Box>
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
          {post?._id && (
            <CreateComent postBlogId={post?._id} />
          )}
        </Grid>
      )}
      {loading ? (
        <Grid item xs={12} md={12} sx={{ pt: '1em' }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        comments && (
          getComents && getComents.length > 0 ? ( getComents.map(( Data, index ) => (
            <Grid key={index.toString()} item xs={12} md={12} sx={{ pt: '1em' }}>
              <Comments Data={Data} />
            </Grid>
          ))
          ) : (
            <Grid item xs={12} md={12} sx={{ pt: '1em' }}>
              <p>Nadie a comentado aun</p>
            </Grid>
          )
        )
      )}

    </Grid>
  );
};
