import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface ICardProps {
  profile?:boolean;
}

export const CardComp = ({ profile }:ICardProps ) => (
  <Card sx={{ boxShadow: 2 }}>
    <CardActionArea>
      {/*  <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Green iguana
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="b">
          author
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" component="b">
          date
        </Typography>
      </CardContent>

    </CardActionArea>
    {profile && (
      <CardActions>
        <Button size="small" color="primary">
          Ver publicacion
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            console.log( 'click' );
          }}
        >
          editar
        </Button>
        <Button size="small" color="primary">
          eliminar
        </Button>
      </CardActions>
    )}
  </Card>
);
