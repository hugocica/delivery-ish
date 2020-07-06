import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fonts: { [key in keyof typeof fonts]: any };
    fontFamily: string;
    grid: { [key in keyof typeof grid]: any };
    mediaQueries: { [key in keyof typeof mediaQueries]: string };
    spacing: (multiplier: number) => number;
  }
}

export const colors = {
  black: '#000',
  white: '#fff',
  gray1: '#F1F1F1',
  gray2: '#EBEBEB',
  gray3: '#DDDDDD',
  gray4: '#484849',
  primary100: '#FFC500',
  unset: 'unset',
};

const genericFontType = {
  fontFamily: 'Noto Sans',
};

export const fonts = {
  heading2: {
    ...genericFontType,
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: '19px',
  },
  caption: {
    ...genericFontType,
    fontSize: 12,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    fontWeight: 400,
    lineHeight: '16px',
  },
  body: {
    ...genericFontType,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: '19px',
  },
  button: {
    ...genericFontType,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    lineHeight: '15px',
  },
};

const breakpoints = {
  lg: 1280,
  md: 980,
  sm: 736,
  xs: 480,
};

const gutter = 7;

export const grid = {
  breakpoints,
  row: {
    padding: gutter,
  },
  col: {
    padding: gutter,
  },
  container: {
    padding: gutter,
    maxWidth: {
      xl: 1280,
      lg: 1280,
      md: 980,
      sm: 736,
      xs: 480,
    },
  },
};

export const mediaQueries = {
  xs: `(max-width: ${grid.breakpoints.xs}px)`,
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
  md: `(max-width: ${grid.breakpoints.md}px)`,
  lg: `(max-width: ${grid.breakpoints.lg}px)`,
};

const theme: DefaultTheme = {
  colors,
  fonts,
  fontFamily: genericFontType.fontFamily,
  grid,
  mediaQueries,
  spacing: (multiplier: number) => multiplier * gutter,
};

export default theme;
