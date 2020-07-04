import React from 'react';
import { Container, Row } from 'styled-bootstrap-grid';
import Logo from 'assets/icons/beer.svg';

import Text from 'components/Text';

import * as s from './styles';

export default function Header() {
  return (
    <s.Wrapper>
      <Container>
        <Row alignItems="center">
          <Logo width={72} />
        </Row>
      </Container>
    </s.Wrapper>
  );
}
