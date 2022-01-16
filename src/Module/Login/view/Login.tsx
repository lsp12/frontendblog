import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button, Card, CardActions, CardContent, CardMedia, FormHelperText, Grid, Hidden, IconButton, Input, InputAdornment, InputLabel, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginReducer } from '../../../shared/Store/ActionAuth/Auth.reducer';
import { useAppDispatch } from '../../../shared/Store/Hook';
import { schemaLogin } from '../../../shared/Yup/Yup';
import { ILogin } from '../interface/Interface';

interface State {
  password: string;
  showPassword: boolean;
}

export const Login = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = ( event: React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();
  };

  const {
    getFieldProps, handleSubmit, resetForm, errors, touched,
  } = useFormik<ILogin>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schemaLogin,
    onSubmit: ({
      email, password,
    }) => {
      dispatch( loginReducer({ email, password }));
      resetForm();
    },
  });

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={12}>

        <Card sx={{ mt: '5em', boxShadow: 5 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Hidden smDown>
              <Grid item xs md>
                <CardMedia
                  component="img"
                  height="194"
                  image="https://www.banabiosa.com/wp-content/uploads/2021/06/Ripen_unripen_bananas-1-scaled.jpg"
                  alt="logo banan"
                />
              </Grid>
            </Hidden>
            <form
              onSubmit={handleSubmit}
              autoComplete="true"
            >
              <Grid item xs={12} md={12}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>

                    <TextField
                      id="input-with-sx"
                      fullWidth
                      label="Ingrese su email"
                      variant="standard"
                      {...getFieldProps( 'email' )}
                      error={!!errors.email && touched.email}
                      helperText={touched.email && errors.email}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                          </InputAdornment>
                        ),
                      }}

                    />
                  </Box>
                  <Box sx={{ mt: '1em' }}>
                    <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      fullWidth
                      type={values.showPassword ? 'text' : 'password'}
                      {...getFieldProps( 'password' )}
                      error={!!errors.password && touched.password}
                      endAdornment={(
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )}
                    />
                    <FormHelperText error={!!errors.password && touched.password}>
                      {touched.password && errors.password}
                    </FormHelperText>
                  </Box>
                </CardContent>
              </Grid>

              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button variant="contained" type="submit">
                  iniciar sesion
                </Button>
                <Link to="/register" style={{ textDecoration: 'none', color: 'orange' }}>Registrarse</Link>
              </CardActions>
            </form>
          </Grid>
        </Card>

      </Grid>
    </Grid>
  );
};
