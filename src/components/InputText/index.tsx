import React, { useState } from 'react';

import * as s from './styles';

export default function InputText({
  onChange,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const [hasContent, setHasContent] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setHasContent(!!value.length);

    if (onChange) {
      onChange(event);
    }
  };
  return <s.Input {...rest} onChange={handleChange} hasContent={hasContent} />;
}
