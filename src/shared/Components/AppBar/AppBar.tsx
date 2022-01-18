import {
  Button, Grid, ListItemIcon, Menu, MenuItem, Typography,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as React from 'react';
import { Logout } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { singOut } from '../../Store/ActionAuth/Auth.slice';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';

export const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>( null );
  const { authethicated } = useAppSelector(( state ) => state.authSlice );
  const dispatch = useAppDispatch();
  const open = Boolean( anchorEl );
  const handleClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    setAnchorEl( event.currentTarget );
  };
  const navigate = useNavigate();
  const handleClose = ( logout:boolean ) => {
    if ( logout ) {
      setAnchorEl( null );
      Cookies.remove( 'token' );
      dispatch( singOut());
    } else {
      navigate( '/login' );
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Typography variant="h6">
          Foro Sumifru
        </Typography>
      </Grid>
      <Grid item xs={0}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit"
        >
          <AccountBoxIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {authethicated === true ? (
            <MenuItem onClick={() => handleClose( true )}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Cerrar sesion
            </MenuItem>
          ) : (
            <MenuItem onClick={() => handleClose( false )}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Iniciar sesion
            </MenuItem>
          )}

        </Menu>
      </Grid>
    </Grid>
  );
};
