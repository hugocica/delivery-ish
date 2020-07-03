import styled, { css } from 'styled-components';

import { IProps, ITextStyle } from './types';

const truncate = css<any>`
  width: ${(props) => props.width && props.width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p<ITextStyle>`
  color: ${(props) => props.theme.colors[props.color]};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.bold && 'bold'};

  ${(props) => props.truncate && truncate};
  ${(props) =>
    // if props.type not found in theme settings, get body as default
    props.theme.fonts[props.type] || props.theme.fonts.body}
`;
