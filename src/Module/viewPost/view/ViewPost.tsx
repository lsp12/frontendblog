import {
  Box, Button, Card, CardContent, CircularProgress, Grid, Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import { toast } from 'react-toastify';
import { openCrearComent } from '../../../shared/Store/ActionApp/app.slice';
import { getComentsController } from '../../../shared/Store/ActionConments/Conments.reducer';
import { getPostController } from '../../../shared/Store/ActionPost/Post.reducer';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { Comments } from '../Components/Comments/Comments';
import { CreateComentState } from '../Components/MyComent/CreateComentState';

export const ViewPost = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { crearComent } = useAppSelector(( state ) => state.appSlice );
  const { getComents, loading } = useAppSelector(( state ) => state.comentsSlice );
  const { post } = useAppSelector(( state ) => state.postSlice );
  const { authethicated } = useAppSelector(( state ) => state.authSlice );

  useEffect(() => {
    if ( params.id ) {
      dispatch( getPostController( params.id ));
      dispatch( getComentsController( params.id ));
    }
  }, [dispatch, params.id]);

  const stringToHtml = ( string: string | undefined ) => {
    let reading = false;
    if ( !reading ) {
      reading = true;
      const parse = Range.prototype.createContextualFragment.bind( document.createRange());
      const body = document.getElementById( `${post?._id}-coment` );
      if ( body ) {
        if ( body.childNodes.length <= 0 ) {
          if ( string ) {
            body.appendChild( parse( string ));
          }
        }
      }
    }
  };

  useEffect(() => {
    stringToHtml( post?.body );
  }, [post?.body, post?._id]);

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
              <div id={`${post?._id}-coment`} />
              {stringToHtml( post?.body )}
            </Box>
          </CardContent>

          <Box maxWidth="100%" display="flex" justifyContent="space-between" p="1em">
            {authethicated ? (
              <Button onClick={() => {
                dispatch( openCrearComent( !crearComent ));
              }}
              >
                escribir una refelxion
              </Button>
            ) : (
              <Box />
            )}

            <Button onClick={() => {
              navigator.clipboard.writeText( window.location.href );
              toast.info( 'se copio en su portapapeles' );
            }}
            >
              <ShareIcon />
            </Button>
          </Box>

        </Card>
      </Grid>
      {crearComent && (
        <Grid item xs={12} md={12} sx={{ pt: '1em' }}>
          {post?._id && (
            <CreateComentState postBlogId={post?._id} />
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
      )}
    </Grid>
  );
};
