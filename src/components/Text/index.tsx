import React from 'react';

import { IProps } from './types';
import * as s from './styles';

const Text: React.FC<IProps> = ({
  type = 'body',
  bold = false,
  color = 'gray4',
  children,
  textAlign = 'unset',
  ...rest
}) => (
  <s.Text type={type} bold={bold} color={color} textAlign={textAlign} {...rest}>
    {children}
  </s.Text>
);

export default Text;
