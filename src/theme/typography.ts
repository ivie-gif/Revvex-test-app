import { pxToRem } from '../helpers/formatFont'

const typography = {
  fontFamily:
  'Mulish, sans-serif',
  h2: {
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: pxToRem(18),
    lineHeight: '24px',
    letterSpacing: '2%',
  },
  h3: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: pxToRem(18),
    lineHeight: '27px',
    letterSpacing: '2%',
  },
  h4: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: pxToRem(18),
    lineHeight: '23.94px',
    letterSpacing: '2%',
  },
  h5: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: pxToRem(16),
    lineHeight: '24px',
    letterSpacing: '2%',
  },
  body1: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: pxToRem(14),
    lineHeight: '21px',
    letterSpacing: '0.15%',
  },
  body2: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: pxToRem(14),
    lineHeight: '21px',
    letterSpacing: '0.15%',
  },
  subtitle1: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: pxToRem(12),
    lineHeight: '18px',
    letterSpacing: '0.15%',
  },
  subtitle2: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: pxToRem(12),
    lineHeight: '18px',
    letterSpacing: '0.15%',
  },
  overline: {
    fontWeight: 500,
  },
}

export default typography
