import { css } from 'styled-components'


// usage: import theme from '../../../Theme'


export const type = {
  logoType: "brother-1816",
  body: "brother-1816",


}

export const breakpoints = {
  xs: '400px',
  sm: '768px',
  ipad: '820px',
  md: '1000px',
  lg: '1250px',
  xl: '1800px',

}

export const devices = {
  extraSmall: `(min-width: ${breakpoints.xs})`,
  small: `(min-width: ${breakpoints.sm})`,
  ipad: `(min-width: ${breakpoints.ipad})`,
  medium: `(min-width: ${breakpoints.md})`,
  large: `(min-width: ${breakpoints.lg})`,
  extraLarge: `(min-width: ${breakpoints.xl})`,
}

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export const colours = {
  orange: 'rgb(201, 82, 60)',
  green: '#427265',
  cream: '#F7F5EE',
  pink: '#E7A5BA',
  blue: '#1D76FC',
  purple: '#AA7DAE',

  gusYellow: '#f8dd8b',
  gusBlue: '#D2EDF2',
  gusPink: '#D91A5D',
  grey: '#707070',
  white: '#fff',
  black: '#000',
  red: 'darksalmon',

}

const theme = {
  mediaQuery,
  breakpoints,
  devices,
  colours,
  type,
}

export default theme
