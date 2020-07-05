import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row } from 'styled-bootstrap-grid';

import * as s from './styles';

export default function Header() {
  const history = useHistory();

  return (
    <s.Wrapper>
      <Container>
        <Row alignItems="center">
          <s.BeerLogo width={72} onClick={() => history.push('/')} />
        </Row>
      </Container>
    </s.Wrapper>
  );
}
