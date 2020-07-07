import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';

import Button from 'components/Button';
import Text from 'components/Text';

import ProductsCards from './ProductsCards';
import { IProduct } from './types';
import * as s from './styles';

interface IState {
  products: {
    list: IProduct[] | [];
  };
}

export default function Products() {
  const { state: locationState }: any = useLocation();
  const history = useHistory();

  const products: IProduct[] = useSelector<IState, any>(
    (state) => state.products.list
  );

  const filters = products
    ? products
        .map((product) =>
          product.productVariants[0].subtitle
            ? product.productVariants[0].subtitle
            : 'Sem categoria'
        )
        .filter((product, index, self) => self.indexOf(product) === index)
    : null;

  return (
    <Container>
      {products.length ? (
        <>
          <s.PageInfos>
            {locationState?.address && (
              <s.AddressInfos>
                <Text>Mostrando resultados perto de:</Text>
                <Text bold uppercase>
                  {locationState.address}
                </Text>
              </s.AddressInfos>
            )}
            <Text>{products.length} produtos encontrados.</Text>
          </s.PageInfos>
          {/* {filters?.map((filter) => (
            <s.ProductCardCategoryTag>{filter}</s.ProductCardCategoryTag>
          ))} */}
          <s.ProductsContainer>
            {products.map((product: IProduct) => (
              <ProductsCards
                key={`product-item-id-${product.id}`}
                product={product}
              />
            ))}
          </s.ProductsContainer>
        </>
      ) : (
        <s.EmptyState>
          <Text type="headline" uppercase bold>
            Nenhum produto foi encontrado.
          </Text>
          <Button color="primary" onClick={() => history.push('/')}>
            Clique aqui para procurar em outro endereço
          </Button>
        </s.EmptyState>
      )}
    </Container>
  );
}
