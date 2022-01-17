import React from 'react';
import { useFormik } from 'formik';
import {
  Button, DialogActions, DialogContent, TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { schemaPost } from '../../Yup/Yup';
import { ICreatePost } from '../../../Module/Home/interface/interface';
import { openModal } from '../../Store/ActionApp/app.slice';
import { useAppDispatch, useAppSelector } from '../../Store/Hook';
import useInitialFormState from '../../Hooks/useInitialState';
import { createPostController, UpdatePostController } from '../../Store/ActionPost/Post.reducer';

export const FormCreatePost = () => {
  const { modalOpen } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch( openModal( !modalOpen ));
  };

  const {
    getFieldProps, handleSubmit, resetForm, errors, touched,
  } = useFormik<ICreatePost>({
    initialValues: useInitialFormState(),
    enableReinitialize: true,
    validationSchema: schemaPost,
    onSubmit: ({
      title, body, id,
    }) => {
      if ( id !== '' ) {
        dispatch( UpdatePostController({ _id: id, title, body }));
      } else {
        dispatch( createPostController({ title, body }));
      }
      resetForm();
      handleClose();
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="true"
    >
      <DialogContent>
        <Box>
          <TextField
            id="standard-basic"
            label="Titulo"
            {...getFieldProps( 'title' )}
            error={!!errors.title && touched.title}
            helperText={touched.title && errors.title}
          />
        </Box>

        <Box pt="1em">
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            minRows={3}
            maxRows={4}
            {...getFieldProps( 'body' )}
            error={!!errors.body && touched.body}
            helperText={touched.body && errors.body}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Descartar</Button>
        <Button type="submit">Agregar</Button>
      </DialogActions>
    </form>
  );
};
