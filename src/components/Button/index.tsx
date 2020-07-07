import React from 'react';

import * as s from './styles';

interface IProps {
  color?: 'primary';
  outlined?: boolean;
  isLoading?: boolean;
}
const Button: React.FC<
  IProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, isLoading, ...rest }) => {
  return (
    <>
      <s.Button {...rest}>{children}</s.Button>
      {isLoading && <s.Loading />}
    </>
  );
};

export default Button;
