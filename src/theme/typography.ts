import { pxToRem } from '../helpers/formatFont'

const typography = {
  fontFamily:
  'Mulish, Lexend, sans-serif',
  h2: {
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: pxToRem(24),
    lineHeight: '24px',
    letterSpacing: '2%',
  },
  h3: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: pxToRem(16),
    lineHeight: '24px',
    letterSpacing: '-1.1%',
  },
  // h4: {
  //   fontWeight: 500,
  //   fontStyle: 'normal',
  //   fontSize: pxToRem(18),
  //   lineHeight: '23.94px',
  //   letterSpacing: '2%',
  // },
  // h5: {
  //   fontWeight: 500,
  //   fontStyle: 'normal',
  //   fontSize: pxToRem(16),
  //   lineHeight: '24px',
  //   letterSpacing: '2%',
  // },
  body1: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: pxToRem(14),
    lineHeight: '24px',
    letterSpacing: '0.15%',
  },
  body2: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: pxToRem(13),
    lineHeight: '19px',
    letterSpacing: '0.15%',
  },
  subtitle1: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: pxToRem(18),
    lineHeight: '24px',
    letterSpacing: '-1.1%',
  },
  subtitle2: {
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: pxToRem(13),
    lineHeight: '19px',
    letterSpacing: '0.15%',
  },
  overline: {
    fontWeight: 500,
  },
}

export default typography
