import React from 'react';
import { useFormik } from 'formik';
import {
  Button, ButtonGroup, DialogActions, DialogContent, TextField,
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
    getFieldProps, handleSubmit, resetForm, errors, touched, setFieldValue, values,
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

  const handleSelect = ( CrearComent:string, element:string | undefined ) => {
    /* const element = window.getSelection()?.toString(); */
    switch ( CrearComent ) {
      case 'B':
        if ( element ) {
          const text = values.body;
          console.log( text );
          setFieldValue( 'body', text.replace( element, `<b>${element.trim()}</b> ` ));
        }
        break;
      case 'I':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<i>${element.trim()}</i> ` ));
        }
        break;
      case 'U':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<u>${element.trim()}</u> ` ));
        }
        break;
      case 'S':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<s>${element.trim()}</s> ` ));
        }
        break;
      case 'A':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<a href="${element.trim()}" target="_blank" rel="noreferrer">click aqui</a> ` ));
        }
        break;
      case 'code':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<code>${element.trim()}</code> ` ));
        }
        break;
      case 'cita':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<blockquote>${element.trim()}</blockquote> ` ));
        }
        break;
      case 'img':
        if ( element ) {
          const text = values.body;
          setFieldValue( 'body', text.replace( element, `<img src="${element.trim()}" alt=""> ` ));
        }
        break;
      default:
        return '';
    }
  };

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
        {/* <a href="https://www.youtube.com/watch?v=xcV81QKYPnY" target="_blank" rel="noreferrer" /> */}
        <Box pt="1em">
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            minRows={3}
            maxRows={6}
            {...getFieldProps( 'body' )}
            error={!!errors.body && touched.body}
            helperText={touched.body && errors.body}
          />
        </Box>
        <ButtonGroup variant="outlined">
          <Button onClick={() => handleSelect( 'B', window.getSelection()?.toString())}>
            <b>B</b>
          </Button>
          <Button onClick={() => handleSelect( 'img', window.getSelection()?.toString())}>
            <b>img</b>
          </Button>
          <Button onClick={() => handleSelect( 'I', window.getSelection()?.toString())}>
            <i>C</i>
          </Button>
          <Button onClick={() => handleSelect( 'U', window.getSelection()?.toString())}>
            <u>U</u>
          </Button>
          <Button onClick={() => handleSelect( 'S', window.getSelection()?.toString())}>
            <s>S</s>
          </Button>
          <Button onClick={() => handleSelect( 'A', window.getSelection()?.toString())}>
            Link
          </Button>
          <Button onClick={() => handleSelect( 'code', window.getSelection()?.toString())}>
            <code>html</code>
          </Button>
          <Button onClick={() => handleSelect( 'cita', window.getSelection()?.toString())}>
            citar
            {/* <blockquote>citar</blockquote> */}
          </Button>
        </ButtonGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Descartar</Button>
        <Button type="submit">Agregar</Button>
      </DialogActions>
    </form>
  );
};
