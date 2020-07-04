import React from 'react';
import { colors } from 'styles/theme';

import { ReactComponent as github } from 'assets/icons/github.svg';

export const dict = {
  github,
};

interface IProps {
  name: keyof typeof dict;
  color?: keyof typeof colors;
}

export default ({
  name,
  color = 'gray4',
  width,
  fill,
  ...rest
}: IProps & React.SVGAttributes<SVGElement>) => {
  const Icon = dict[name];
  return Icon ? (
    <Icon width={width} fill={color ? colors[color] : fill} {...rest} />
  ) : null;
};
