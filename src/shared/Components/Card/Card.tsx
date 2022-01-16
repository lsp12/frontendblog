import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';
import { DeleteModalReducer, openModal } from '../../Store/ActionApp/app.slice';
import { IPost } from '../../Interface/rest.interface';

interface ICardProps {
  profile?:boolean;
  data:IPost
}

export const CardComp = ({ profile, data }:ICardProps ) => {
  const navigate = useNavigate();
  const { modalOpen, openDeleteModal } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{ boxShadow: 2 }}

    >
      <CardActionArea>
        <CardContent onClick={() => {
          navigate( `/card/${data._id}` );
        }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="b">
            {data.userid.nameUser}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.body}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="b">
            {moment( data?.createdAt ).locale( 'es-mx' ).format( 'MMMM Do YYYY, h:mm:ss a' )}
          </Typography>
        </CardContent>

      </CardActionArea>
      {profile && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              navigate( `/card/${data._id}` );
            }}
          >
            Ver publicacion
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => {
              /* dispatch( setPost({ id: id.toString(), title: 'title', body: 'body' })); */
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
