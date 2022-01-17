import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Card, CardActions, CardContent, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterReducer } from '../../../shared/Store/ActionAuth/Auth.reducer';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { schemaRegister } from '../../../shared/Yup/Yup';
import { IRegister } from '../interface/interface';

interface State {
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

export const Register = () => {
  const dispatch = useAppDispatch();
  const { register } = useAppSelector(( state ) => state.authSlice );

  const navigate = useNavigate();

  if ( register ) {
    navigate( '/login' );
  }

  const [values, setValues] = React.useState<State>({
    password: '',
    confirmPassword: '',
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
  } = useFormik<IRegister>({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
      confirmPassword: '',
      position: '',
    },
    validationSchema: schemaRegister,
    onSubmit: async ({
      nombre, email, password, confirmPassword, position,
    }) => {
      await dispatch( RegisterReducer({
        nombre, email, password, confirmPassword, position,
      }));
      /* const res = a.payload.response.data.message; */
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
      <Card sx={{
        mt: '5em', boxShadow: 5, minWidth: '25em',
      }}
      >
        <form
          onSubmit={handleSubmit}
          autoComplete="true"
        >
          <CardContent>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ pt: '1em', pb: '1em' }}
            >
              <Typography variant="h6">
                Registro
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sx={{ pt: '1em', pb: '1em' }}>
              <TextField
                fullWidth
                label="Nombre completo"
                type="text"
                autoComplete="text"
                {...getFieldProps( 'nombre' )}
                error={!!errors.nombre && touched.nombre}
                helperText={touched.nombre && errors.nombre}
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ pt: '1em', pb: '1em' }}>
              <TextField
                fullWidth
                label="Cargo"
                type="text"
                autoComplete="text"
                {...getFieldProps( 'position' )}
                error={!!errors.position && touched.position}
                helperText={touched.position && errors.position}
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{ pt: '1em', pb: '1em' }}>
              <TextField
                fullWidth
                label="Correo electronico"
                type="email"
                autoComplete="text"
                {...getFieldProps( 'email' )}
                error={!!errors.email && touched.email}
                helperText={touched.email && errors.email}
              />
            </Grid>

            <Grid item xs={12} md={12} sx={{ pt: '1em', pb: '0.5em' }}>
              <InputLabel htmlFor="outlined-adornment-password">contraseña</InputLabel>
              <OutlinedInput
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
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
                label="Contraseña"
              />
              <FormHelperText error={!!errors.password && touched.password}>
                {touched.password && errors.password}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} md={12} sx={{ pt: '1em', pb: '0.5em' }}>
              <InputLabel htmlFor="outlined-adornment-password">vuelve a escribir la contraseña</InputLabel>
              <OutlinedInput
                fullWidth
                type={values.showPassword ? 'text' : 'password'}
                {...getFieldProps( 'confirmPassword' )}
                error={!!errors.confirmPassword && touched.confirmPassword}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
                label="vuelve a escribir la contraseña"
              />
              <FormHelperText error={!!errors.confirmPassword && touched.confirmPassword}>
                {touched.confirmPassword && errors.confirmPassword}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={12} sx={{ pt: '1em', pb: '1em' }}>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button variant="contained" type="submit">
                  Registrarse
                </Button>
                <Link to="/login" style={{ textDecoration: 'none', color: 'orange' }}>ya tienes cuenta?</Link>
              </CardActions>
            </Grid>

          </CardContent>
        </form>
      </Card>

    </Grid>
  );
};
