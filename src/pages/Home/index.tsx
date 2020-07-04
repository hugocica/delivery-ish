import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'styled-bootstrap-grid';

import * as s from './styles';

export default function HomePage() {
  const [address, setAddress] = useState<string>('');

  const handleClickSearchButton = () => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        key: 'AIzaSyC45Jggm8rQXy4ypjgrJHkleQrv71OOIl0',
        address: address,
      },
    });
  };

  return (
    <s.Container>
      <Row>
        <Col md={4} mdOffset={4}>
          <s.Input
            name="address"
            placeholder="Digite seu endereço..."
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(event.target.value)
            }
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} mdOffset={4}>
          <s.ButtonContainer>
            <button type="button" onClick={handleClickSearchButton}>
              Buscar
            </button>
          </s.ButtonContainer>
        </Col>
      </Row>
    </s.Container>
  );
}
