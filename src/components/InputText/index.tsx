import React from 'react';

import * as s from './styles';

export default function InputText({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <s.Input {...rest} />;
}
