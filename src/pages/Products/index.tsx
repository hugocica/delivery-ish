import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';

import Text from 'components/Text';

import ProductsCards from './ProductsCards';
import { IProduct } from './types';
import * as s from './styles';

interface IState {
  state:
    | {
        products?: IProduct[];
        address?: string;
      }
    | undefined;
}

export default function Products() {
  const { state }: IState = useLocation();
  const [products, setProducts] = useState<IProduct[] | undefined>(undefined);

  useEffect(() => {
    setProducts(state?.products);
  }, [state]);

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
      {products ? (
        <>
          <Text>Mostrando resultados perto de: {state!.address}</Text>
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
        <Text>Nenhum produto foi encontrado. </Text>
      )}
    </Container>
  );
}
