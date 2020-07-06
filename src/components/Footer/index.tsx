import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

import Icon from 'components/Icons';
import Text from 'components/Text';

import * as s from './styles';

export default function Footer() {
  return (
    <s.Wrapper>
      <Container>
        <Row justifyContent="end">
          <Col lgAuto mdAuto smAuto xsAuto>
            <s.Link
              href="https://github.com/hugocica/"
              target="__blank"
              title="hugo cicarelli github link"
            >
              <Icon name="github" color="primary100" width={21} height={21} />
              <Text color="primary100" textAlign="right">
                Hugo Cicarelli
              </Text>
            </s.Link>
          </Col>
        </Row>
      </Container>
    </s.Wrapper>
  );
}
