import React from 'react';
import { Container } from 'styled-bootstrap-grid';

import Text from 'components/Text';

import * as s from './styles';

export default function Footer() {
  return (
    <s.Wrapper>
      <Container>
        <Text color="white" textAlign="right">
          Hugo Cicarelli
        </Text>
      </Container>
    </s.Wrapper>
  );
}
