import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { renderWithProviders } from 'testUtils';

import ProductsPage from '.';
import ProductsCards from './ProductsCards';
import { IProduct } from './types';

const productMock: IProduct = {
  id: '8869',
  title: 'Skol 269ml - Pack com 15 Unidades',
  rgb: false,
  images: [
    {
      url:
        'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/products/8503.png',
    },
  ],
  productVariants: [
    {
      availableDate: '2018-10-31T00:00:00',
      productVariantId: '8503',
      price: 31.35,
      inventoryItemId: '80151',
      shortDescription: null,
      title: 'Skol 269ml - Pack com 15 Unidades',
      published: null,
      volume: '0,04035',
      volumeUnit: null,
      description: null,
      subtitle: 'Cervejas',
      components: [],
    },
  ],
};

describe('Products page', () => {
  it('should render without crashing', () => {
    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    expect(
      getByText('Nenhum produto foi encontrado.').textContent
    ).toBeDefined();
  });
});

describe('Product card component', () => {
  it('should render without crashing', () => {
    const { getByTestId, getByTitle } = renderWithProviders(
      <ProductsCards product={productMock} />
    );

    expect(getByTestId('category').textContent).toEqual('Cervejas');
    expect(getByTestId('title').textContent).toEqual(
      'Skol 269ml - Pack com 15 Unidades'
    );
    expect(getByTestId('price').textContent?.replace(/\s/g, '')).toBe(
      'R$31,35'
    );
    expect(getByTitle('adicionar ao carrinho').textContent).toBeDefined();
  });
  it('should be able to add items to cart and remove them', () => {
    const { getByTitle } = renderWithProviders(
      <ProductsCards product={productMock} />
    );

    fireEvent.click(getByTitle('adicionar ao carrinho'));

    expect(getByTitle('remover do carrinho').textContent).toBeDefined();
    expect(getByTitle('itens no carrinho').textContent).toEqual('1');

    fireEvent.click(getByTitle('adicionar ao carrinho'));

    expect(getByTitle('itens no carrinho').textContent).toEqual('2');

    fireEvent.click(getByTitle('remover do carrinho'));

    expect(getByTitle('itens no carrinho').textContent).toEqual('1');
  });
});
