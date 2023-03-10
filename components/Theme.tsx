import { css } from 'styled-components'


// usage: import theme from '../../../Theme'


export const type = {
  logoType: 'Abril fatface',
body: "Source Sans Pro",
  

}

export const breakpoints = {
  xs: '400px',
  sm: '768px',
  md: '1000px',
  lg: '1250px',
  xl: '1800px',

}

export const devices = {
  extraSmall: `(min-width: ${breakpoints.xs})`,
  small: `(min-width: ${breakpoints.sm})`,
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
  gusGreen: '#339933',
  soil: ' #913029',
  wheat: '#faf4ec',
  darkWheat: '#f0e7db',
  teaGreen: '#d3e5a0',
  gusYellow: '#f8dd8b',
  gusBlue: '#D2EDF2',
  gusPink: '#D91A5D',
  grey: '#707070',
  white: '#fff',
  black: '#000',
}

const theme = {
  mediaQuery,
  breakpoints,
  devices,
  colours,
  type,
}

export default theme
