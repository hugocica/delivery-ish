import React from 'react';
import { colors } from 'styles/theme';

import beer from 'assets/icons/beer.svg';
import github from 'assets/icons/github.svg';
import minus from 'assets/icons/minus.svg';
import plus from 'assets/icons/plus.svg';
import spinner from 'assets/icons/spinner.svg';

export const dict = {
  beer,
  github,
  minus,
  plus,
  spinner,
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
