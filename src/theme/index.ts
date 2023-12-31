// material core
import { createTheme } from '@mui/material/styles'

import { pxToRem } from '../helpers/formatFont'

import palette from './palette'
import typography from './typography'

const themes = (type: number) =>
  createTheme({
    components: {
      MuiOutlinedInput: {
        defaultProps: {
          size: 'small',
          fullWidth: true,
        },
        styleOverrides: {
          root: {
            borderRadius: '4px',
            '& .Mui-disabled': {
              backgroundColor: '#F1F2F6',
            },
          },
          sizeSmall: {
            height: 48,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableTouchRipple: true,
          disableFocusRipple: true,
          variant: 'contained',
          disableElevation: true,
          color: 'secondary',
          fullWidth: true,
          size: 'large',
        },
        styleOverrides: {
          root: {
            borderRadius: '6px',
            outline: '#DDE2E4',
            contained: '#FF8600',
            color: '#5B6871',
            fontSize: pxToRem(14),
            textTransform: 'capitalize',
            fontFamily: "'Ubuntu', sans-serif",
            '& .MuiCircularProgress-root': {
              marginLeft: '4px',
            },
          },
          textError: {
            background: '#fff',
          },
        },
      },
    },
    typography: { ...typography },
    palette: { ...palette },
  })

export default themes
