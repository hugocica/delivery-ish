import { colors, fonts } from 'styles/theme';

export interface IProps {
  color?: keyof typeof colors;
  bold?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'unset';
  truncate?: boolean;
  type?: keyof typeof fonts;
}

export interface ITextStyle extends IProps {
  color: keyof typeof colors;
  bold: boolean;
  textAlign: 'left' | 'center' | 'right' | 'unset';
  type: keyof typeof fonts;
}
