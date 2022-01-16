import {
  Box,
  Button, Card, CardActions, CardContent, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { ICreatePost } from '../../../../shared/Interface/rest.interface';
import { openCrearComent } from '../../../../shared/Store/ActionApp/app.slice';
import { createComentController } from '../../../../shared/Store/ActionConments/Conments.reducer';
import { useAppDispatch, useAppSelector } from '../../../../shared/Store/Hook';
import { schemaComment } from '../../../../shared/Yup/Yup';
import { ICreateComment } from '../../interface/Interface';

interface IComentProps {
  postBlogId: string;
}

export const CreateComent = ({ postBlogId }:IComentProps ) => {
  const { crearComent } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  const {
    getFieldProps, handleSubmit, resetForm, errors, touched,
  } = useFormik<ICreateComment>({
    initialValues: {
      comment: '',
    },
    validationSchema: schemaComment,
    onSubmit: ({
      comment,
    }) => {
      console.log( comment );
      dispatch( openCrearComent( !crearComent ));
      const coment: ICreatePost = {
        comment,
        postBlogId,
      };
      dispatch( createComentController( coment ));
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
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              minRows={3}
              maxRows={4}
              {...getFieldProps( 'comment' )}
              error={!!errors.comment && touched.comment}
              helperText={touched.comment && errors.comment}
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
