import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { openCrearComent } from '../../../shared/Store/ActionApp/app.slice';
import { getComentsController } from '../../../shared/Store/ActionConments/Conments.reducer';
import { getPostController } from '../../../shared/Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { schemaPurbe } from '../../../shared/Yup/Yup';
import { CreateComent } from '../Components/MyComent/CreateComent';
import { Ipru } from '../interface/Interface';

export const ViewPost = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { crearComent } = useAppSelector(( state ) => state.appSlice );
  /* const { getComents, loading } = useAppSelector(( state ) => state.comentsSlice ); */
  const { post } = useAppSelector(( state ) => state.postSlice );

  useEffect(() => {
    if ( params.id ) {
      dispatch( getPostController( params.id ));
      dispatch( getComentsController( params.id ));
    }
  }, [dispatch, params.id]);

  const {
    getFieldProps, handleSubmit, resetForm,
  } = useFormik<Ipru>({
    initialValues: {
      body: '',
    },
    validationSchema: schemaPurbe,
    onSubmit: ({
      body,
    }) => {
      console.log( body );
      /* dispatch( loginReducer({ email, password })); */
      resetForm();
    },
  });

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
              dispatch( openCrearComent( !crearComent ));
            }}
            >
              escribir una refelxion
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
      {/* loading ? (
        <Grid item xs={12} md={12} sx={{ pt: '1em' }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        true && (
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
      ) */}
      <Grid item xs={12} md={12} sx={{ pt: '1em' }}>
        <form
          onSubmit={handleSubmit}
          autoComplete="true"
        >
          Essay:
          <textarea {...getFieldProps( 'body' )} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
