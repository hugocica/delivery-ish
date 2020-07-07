import React from 'react';
import { colors } from 'styles/theme';

import { ReactComponent as beer } from 'assets/icons/beer.svg';
import { ReactComponent as github } from 'assets/icons/github.svg';
import { ReactComponent as minus } from 'assets/icons/minus.svg';
import { ReactComponent as plus } from 'assets/icons/plus.svg';
import { ReactComponent as spinner } from 'assets/icons/spinner.svg';

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
  width?: number;
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
