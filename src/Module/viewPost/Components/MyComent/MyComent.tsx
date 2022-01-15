import {
  Box, Button, Card, CardActions, CardContent, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { openCrearComent } from '../../../../shared/Store/ActionApp/app.slice';
import { useAppDispatch, useAppSelector } from '../../../../shared/Store/Hook';
import { schemaComment } from '../../../../shared/Yup/Yup';
import { ICreateComment } from '../../interface/Interface';

export const MyComent = () => {
  const { crearComent } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();

  const {
    getFieldProps, handleSubmit, resetForm, errors, touched,
  } = useFormik<ICreateComment>({
    initialValues: {
      body: '',

    },
    validationSchema: schemaComment,
    onSubmit: ({
      body,
    }) => {
      console.log( body );
      dispatch( openCrearComent( !crearComent ));
      resetForm();
    },
  });
  return (
    <Card sx={{ boxShadow: 5 }}>
      <form
        onSubmit={handleSubmit}
        autoComplete="true"
      >
        <CardContent>
          <Box>
            <TextField
              id="standard-basic"
              label="Comentario"
              {...getFieldProps( 'body' )}
              error={!!errors.body && touched.body}
              helperText={touched.body && errors.body}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit">
            Agregar comentario
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              dispatch( openCrearComent( !crearComent ));
            }}
          >
            Cancelar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
