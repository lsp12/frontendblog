import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';

export const SpeedDialComp = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <AddCircleIcon />, name: 'Agregar' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
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
      {actions.map(( action ) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          sx={{ backgroundColor: 'rgb(242,171,50)' }}
        />
      ))}
    </SpeedDial>

  );
};
