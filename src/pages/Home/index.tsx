import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import { Row, Col } from 'styled-bootstrap-grid';
import axios from 'axios';
import moment from 'moment';

import Button from 'components/Button';
import { googleAPIToken } from 'services/apollo-config';

import { SEARCH, PRODUCTS } from './queries';
import * as s from './styles';

export default function HomePage() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState<string>('');

  const [getPOC, { data: searchData }] = useLazyQuery(SEARCH);
  const [getProducts, { data: productsData }] = useLazyQuery(PRODUCTS);

  useEffect(() => {
    () => console.log('unmounted');
  });

  useEffect(() => {
    if (searchData?.pocSearch[0]?.id) {
      getProducts({
        variables: {
          id: searchData.pocSearch[0].id,
          search: '',
          categoryId: null,
        },
      });
    } else {
      setIsLoading(false);
    }
  }, [searchData]);

  useEffect(() => {
    if (productsData) {
      setIsLoading(false);
      history.push({
        pathname: '/produtos',
        state: {
          products: productsData?.poc?.products,
          address: address,
        },
      });
    }
  }, [productsData]);

  const handleClickSearchButton = () => {
    setIsLoading(true);
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          key: googleAPIToken,
          address: address,
        },
      })
      .then(({ data }) => {
        const { location } = data.results[0].geometry;

        getPOC({
          variables: {
            lat: location.lat.toString(),
            long: location.lng.toString(),
            algorithm: 'NEAREST',
            now: moment.utc().format(),
          },
        });
      })
      .catch(() => setIsLoading(false));
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
            onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (event.keyCode === 13) {
                handleClickSearchButton();
              }
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={4} mdOffset={4}>
          <s.ButtonContainer>
            <Button
              type="button"
              color="primary"
              disabled={isLoading || !address.length}
              isLoading={isLoading}
              onClick={handleClickSearchButton}
            >
              Buscar
            </Button>
          </s.ButtonContainer>
        </Col>
      </Row>
    </s.Container>
  );
}
