import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';
import { DeleteModalReducer, openModal, setPost } from '../../Store/ActionApp/app.slice';

interface ICardProps {
  profile?:boolean;
  id:string | number;
}

export const CardComp = ({ profile, id }:ICardProps ) => {
  const Navigate = useNavigate();
  const { modalOpen, openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{ boxShadow: 2 }}

    >
      <CardActionArea>
        {/*  <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
        <CardContent onClick={() => {
          Navigate( `/${id}` );
        }}
        >
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
          <Button
            size="small"
            color="primary"
            onClick={() => {
              Navigate( `/${id}` );
            }}
          >
            Ver publicacion
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch( setPost({ id: id.toString(), title: 'title', body: 'body' }));
              dispatch( openModal( !modalOpen ));
            }}
          >
            editar
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch( DeleteModalReducer( !openDeleteModal ));
            }}
          >
            eliminar
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
