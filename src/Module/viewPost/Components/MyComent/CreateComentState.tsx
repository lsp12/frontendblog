import {
  Button, ButtonGroup, Card, CardActions, CardContent, TextField,
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

export const CreateComentState = ({ postBlogId }:IComentProps ) => {
  const dispatch = useAppDispatch();
  const { crearComent } = useAppSelector(( state ) => state.appSlice );
  const {
    getFieldProps, handleSubmit, resetForm, setFieldValue, values,
  } = useFormik<ICreateComment>({
    initialValues: {
      comment: '',
    },
    validationSchema: schemaComment,
    onSubmit: ({
      comment,
    }) => {
      console.log( comment );
      const coment: ICreatePost = {
        comment,
        postBlogId,
      };
      console.log( coment );
      dispatch( createComentController( coment ));
      dispatch( openCrearComent( !crearComent ));
      /* dispatch( loginReducer({ email, password })); */
      resetForm();
    },
  });

  const handleSelect = ( CrearComent:string, element:string | undefined ) => {
    /* const element = window.getSelection()?.toString(); */
    switch ( CrearComent ) {
      case 'B':
        if ( element ) {
          const text = values.comment;
          console.log( text );
          setFieldValue( 'comment', text.replace( element, `<b>${element.trim()}</b> ` ));
        }
        break;
      case 'I':
        if ( element ) {
          const text = values.comment;
          setFieldValue( 'comment', text.replace( element, `<i>${element.trim()}</i> ` ));
        }
        break;
      case 'U':
        if ( element ) {
          const text = values.comment;
          setFieldValue( 'comment', text.replace( element, `<u>${element.trim()}</u> ` ));
        }
        break;
      case 'S':
        if ( element ) {
          const text = values.comment;
          setFieldValue( 'comment', text.replace( element, `<s>${element.trim()}</s> ` ));
        }
        break;
      case 'A':
        if ( element ) {
          const text = values.comment;
          setFieldValue( 'comment', text.replace( element, `<a href="${element.trim()}">click aqui</a> ` ));
        }
        break;
      case 'code':
        if ( element ) {
          const text = values.comment;
          setFieldValue( 'comment', text.replace( element, `<code>${element.trim()}</code> ` ));
        }
        break;
      case 'cita':
        if ( element ) {
          const text = values.comment;
          setFieldValue( 'comment', text.replace( element, `<blockquote>${element.trim()}</blockquote> ` ));
        }
        break;
      default:
        return '';
    }
  };
  return (
    <Card sx={{ boxShadow: 3 }}>
      <form
        onSubmit={handleSubmit}
        autoComplete="true"
      >
        <CardContent>
          Reflexion:
          <TextField
            multiline
            minRows={3}
            maxRows={4}
            {...getFieldProps( 'comment' )}
          />
        </CardContent>

        <ButtonGroup variant="outlined">
          <Button onClick={() => handleSelect( 'B', window.getSelection()?.toString())}>
            <b>B</b>
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
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
