import { amber } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { createStyled } from '@mui/system';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    google: true;
  }
}

let customizedTheme = createTheme({
  palette: {
    primary: {
      main: '#f2ab32',
      dark: '#2D89AD',
    },
    success: {
      main: amber[500],
    },
    secondary: {
      main: '#f2ab32',
    },
    text: {
      primary: '#707070',
      secondary: '#797979',
    },
    info: {
      main: '#219EBC',
      dark: '#177C98',
    },
    warning: {
      main: '#FFDD00',
    },
    error: {
      main: '#E71111',
    },
    background: {
      default: '#ffff',
    },
    grey: {
      400: '#707070',
    },
  },
  typography: {
    h1: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h2: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h3: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h4: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
    h5: {
      fontFamily: ['CodePro', 'sans-serif'].join( ',' ),
    },
  },
  components: {
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
        noOptionsText: 'No hay opciones disponibles',
      },
    },
  },
});

customizedTheme = createTheme( customizedTheme, {
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBlockEnd: customizedTheme.spacing( 0.5 ),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '10px',
          paddingBlock: '0.5rem',
          paddingInline: '1rem',
        },
        containedPrimary: {
          color: '#fff',
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: 'contained',
        color: 'primary',
      },
      variants: [
        {
          props: { variant: 'google' },
          style: {
            border: `1px solid ${customizedTheme.palette.grey[400]}`,
            color: customizedTheme.palette.text.primary,
          },
        },
      ],
    },
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: false,
        disableRipple: false,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
        },
      },
    },
  },
});

customizedTheme.shadows[1] = '0 1px 5px rgba(0, 0, 0, 0.075)';

const theme = customizedTheme;

const styled = createStyled({ defaultTheme: theme });

export { theme, styled };
