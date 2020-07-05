import React from 'react';
import { useLocation } from 'react-router-dom';

import Text from 'components/Text';

export default function Products() {
  const location = useLocation();

  return <Text>Página de produtos</Text>;
}
