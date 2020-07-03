import { DefaultTheme } from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof colors]: string };
    fonts: { [key in keyof typeof fonts]: any };
    fontFamily: string;
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
  primary60: 'rgb(255, 197, 0.6)',
  primary38: 'rgb(255, 197, 0.38)',
  primary12: 'rgb(255, 197, 0.12)',
  primary4: 'rgb(255, 197, 0.04)',
  unset: 'unset',
};

const genericFontType = {
  fontFamily: 'Noto Sans',
};

export const fonts = {
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

const theme: DefaultTheme = {
  colors,
  fonts,
  fontFamily: genericFontType.fontFamily,
  spacing: (multiplier: number) => multiplier * 7,
};

export default theme;
