import {
  Button,
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import React from 'react';

export const Comments = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log( data );
  return (
    <Card sx={{ boxShadow: 5 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {Date.now()}
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, sunt repellat. Ea, voluptate ad debitis nemo perspiciatis deleniti repellendus facilis mollitia vel cumque recusandae blanditiis earum, quo, iste hic corporis.
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
