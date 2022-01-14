import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
  nombre: yup.string().required( 'El nombre es requerido' ),
  email: yup.string().email( 'El email no es válido' ).required( 'El email es requerido' ),
  password: yup.string().required( 'La contraseña es requerida' ),
  confirmPassword: yup.string().oneOf([yup.ref( 'password' ), null], 'Las contraseñas no coinciden' ),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email( 'El email no es válido' ).required( 'El email es requerido' ),
  password: yup.string().required( 'La contraseña es requerida' ),
});
