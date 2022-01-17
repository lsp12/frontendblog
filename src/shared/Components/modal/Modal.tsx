import {
  Box, Card, CardHeader, Dialog, IconButton, Typography,
} from '@mui/material';

interface IFormDialogProps {
  children: JSX.Element | JSX.Element[];
  open: boolean;
  closeFunction: () => void;
  title: string;
  dialogMaxWidth?: string;
}

const FormDialog = ({
  children, open, closeFunction, title, dialogMaxWidth,
}: IFormDialogProps ) => (
  <Dialog
    open={open}
    keepMounted
    onClose={closeFunction}
    sx={{
      '.MuiDialog-paper': {
        width: '90%',
        maxWidth: dialogMaxWidth || '500px',
      },
    }}
  >
    <Card sx={{ overflowY: 'auto' }}>
      <CardHeader
        title={(
          <Box display="flex" alignItems="center" justifyContent="space-between" pt={1} pb={1}>
            <Typography variant="h6" color="grey">
              {title}
            </Typography>
            <IconButton
              color="inherit"
              sx={{
                fontSize: '16px', maxHeight: '25px', maxWidth: '25px', minWidth: '25px', minHeight: '25px',
              }}
              onClick={closeFunction}
            >
              x
            </IconButton>
          </Box>
        )}
        sx={{ borderBottom: '1px solid #E0E0E0' }}
      />
      {children}
    </Card>
  </Dialog>
);

export default FormDialog;
