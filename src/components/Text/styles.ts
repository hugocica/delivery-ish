import styled, { css } from 'styled-components';

import { ITextStyle } from './types';

const truncateCSS = css<any>`
  width: ${({ width }) => width && width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p<ITextStyle>`
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ bold }) => bold && 'bold'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'unset')};

  ${({ truncate }) => truncate && truncateCSS};
  ${({ theme, type }) =>
    // if props.type not found in theme settings, get body as default
    theme.fonts[type] || theme.fonts.body}
`;
