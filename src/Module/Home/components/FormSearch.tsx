import {
  Button,
  FormControl, FormHelperText, Input, InputAdornment, InputLabel,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useFormik } from 'formik';
import FormDialog from '../../../shared/Components/modal/Modal';
import { FormCreatePost } from '../../../shared/Components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../../shared/Store/Hook';
import { openModal } from '../../../shared/Store/ActionApp/app.slice';
import { schemaSearch } from '../../../shared/Yup/Yup';
import { ISearchPost } from '../interface/interface';
import { getPosts, SearchPostController } from '../../../shared/Store/ActionPost/Post.reducer';

export const FormSearch = () => {
  const { modalOpen } = useAppSelector(( state ) => state.appSlice );
  const dispatch = useAppDispatch();
  const { searchExit } = useAppSelector(( state ) => state.postSlice );

  const {
    getFieldProps, handleSubmit, resetForm, errors, touched,
  } = useFormik<ISearchPost>({
    initialValues: {
      title: '',
    },
    enableReinitialize: true,
    validationSchema: schemaSearch,
    onSubmit: ({
      title,
    }) => {
      console.log( title );
      if ( title !== '' ) {
        dispatch( SearchPostController( title ));
      }
    },
  });
  return (
    <>
      {!searchExit && (
        <form
          onSubmit={handleSubmit}
          autoComplete="true"
        >
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Buscar una publicacion
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              fullWidth
              {...getFieldProps( 'title' )}
              error={!!errors.title && touched.title}
              startAdornment={(
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )}
            />
          </FormControl>
          <FormHelperText error={!!errors.title && touched.title}>
            {touched.title && errors.title}
          </FormHelperText>
        </form>
      )}

      {searchExit && (
        <Button onClick={() => {
          resetForm();
          dispatch( getPosts());
        }}
        >
          Regresar atras
        </Button>
      )}

      <FormDialog
        open={modalOpen}
        closeFunction={() => dispatch( openModal( !modalOpen ))}
        title="Crear publicacion"
      >
        <FormCreatePost />
      </FormDialog>
    </>
  );
};
