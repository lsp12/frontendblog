import {
  Button, Grid, ListItemIcon, Menu, MenuItem, Typography,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as React from 'react';
import { Logout } from '@mui/icons-material';

export const AppBarComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>( null );
  const open = Boolean( anchorEl );
  const handleClick = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    setAnchorEl( event.currentTarget );
  };
  const handleClose = () => {
    setAnchorEl( null );
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
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};
