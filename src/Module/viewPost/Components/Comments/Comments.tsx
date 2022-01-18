import {
  Box,
  Button,
  Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect } from 'react';
import { Avatar } from '../../../../shared/Hooks/useToken';
import { IGetComent } from '../../../../shared/Interface/rest.interface';
import { deleteComentController } from '../../../../shared/Store/ActionConments/Conments.reducer';
import { useAppDispatch, useAppSelector } from '../../../../shared/Store/Hook';

interface ICreateCommentProps {
  Data: IGetComent;
}
export const Comments = ({ Data }:ICreateCommentProps ) => {
  const {
    comment, createdAt, userId, _id,
  } = Data;
  const { dataUser } = useAppSelector(( state ) => state.authSlice );
  const dispatch = useAppDispatch();

  const stringToHtml = ( string: string ) => {
    console.log( 'me imprimi' );
    let reading = false;
    if ( !reading ) {
      reading = true;
      const parse = Range.prototype.createContextualFragment.bind( document.createRange());
      const body = document.getElementById( `${_id}-coment` );
      if ( body ) {
        if ( body.childNodes.length <= 0 ) {
          body.appendChild( parse( string ));
        }
      }
    }
  };
  useEffect(() => {
    stringToHtml( comment );
  }, [comment]);

  return (
    <Card sx={{ boxShadow: 5 }}>
      <Box display="flex" alignItems="flex-end" justifyContent="space-between">
        <Box display="flex" alignItems="flex-end">
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={Avatar( dataUser?.nameUser )}
            alt="Live from space album cover"
          />
          <CardContent>
            <Typography variant="subtitle1">
              {moment( createdAt ).locale( 'es-mx' ).format( 'MMMM Do YYYY, h:mm:ss a' )}
            </Typography>
            <Typography variant="subtitle1">
              {userId?.position}
            </Typography>

            <div id={`${_id}-coment`} />
            {stringToHtml( comment )}
            <Typography variant="caption">
              {userId?.nameUser}
            </Typography>
          </CardContent>
        </Box>
        {dataUser && dataUser.email === userId?.email && (
          <Box>
            <CardActions>
              <Button onClick={() => dispatch( deleteComentController( Data ))}>
                Eliminar tu comentario
              </Button>
            </CardActions>
          </Box>
        )}
      </Box>
    </Card>

  );
};
