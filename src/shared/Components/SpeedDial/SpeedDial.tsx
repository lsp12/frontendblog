import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';
import { openModal } from '../../Store/ActionApp/app.slice';

export const SpeedDialComp = () => {
  const dispatch = useAppDispatch();
  const { modalOpen } = useAppSelector(( state ) => state.appSlice );
  return (

    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        '& > button': { backgroundColor: 'rgb(242,171,50)' },
        '& > button:hover': { backgroundColor: 'rgb(242,171,50)' },
      }}
      icon={<SpeedDialIcon />}

    >

      <SpeedDialAction
        onClick={() => {
          dispatch( openModal( !modalOpen ));
        }}
        key="Agregar"
        icon={<AddCircleIcon />}
        tooltipTitle="Agregar"
        sx={{ backgroundColor: 'rgb(242,171,50)' }}
      />
    </SpeedDial>

  );
};
