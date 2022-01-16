import {
  Button,
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import moment from 'moment';
import React from 'react';
import { ICreateComment } from '../../interface/Interface';

interface ICreateCommentProps {
  Data: ICreateComment;
}
export const Comments = ({ Data }:ICreateCommentProps ) => {
  const { comment, createdAt } = Data;
  return (
    <Card sx={{ boxShadow: 5 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {moment( createdAt ).locale( 'es-mx' ).format( 'MMMM Do YYYY, h:mm:ss a' )}
        </Typography>
        <Typography variant="body2">
          {comment}
        </Typography>
        <Typography variant="body2">
          author
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => {
          alert( 'eliminado' );
        }}
        >
          Eliminar tu comentario
        </Button>
      </CardActions>
    </Card>
  );
};
