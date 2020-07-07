import React, { useState } from 'react';
import { IProduct } from './types';

import PlusSign from 'assets/icons/plus.svg';
import MinusSign from 'assets/icons/minus.svg';
import Button from 'components/Button';
import Text from 'components/Text';

import * as s from './styles';

interface IProps {
  product: IProduct;
}

const ProductsCards = ({ product, ...rest }: IProps) => {
  const [quantity, setQuantity] = useState(0);
  // console.log(product);
  return (
    <s.ProductCard {...rest}>
      <s.ProductCardImageContainer>
        <img src={product.images[0].url} />
      </s.ProductCardImageContainer>
      <s.ProductCardInfos>
        <s.InfosHeader>
          <s.ProductCardCategoryTag data-testid="category">
            {product?.productVariants[0]?.subtitle
              ? product.productVariants[0].subtitle
              : 'Sem categoria'}
          </s.ProductCardCategoryTag>
          <s.ProductName data-testid="title">{product.title}</s.ProductName>
        </s.InfosHeader>

        <s.InfosFooter>
          <s.ProductPrice color="gray4" bold data-testid="price">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.productVariants[0].price)}
          </s.ProductPrice>
          <s.UnityContainer>
            {quantity > 0 && (
              <>
                <Button
                  outlined
                  onClick={() =>
                    setQuantity((currentQuantity) => --currentQuantity)
                  }
                  title="remover do carrinho"
                >
                  <MinusSign width={14} />
                </Button>
                <s.UnityText color="primary100" bold title="itens no carrinho">
                  {quantity}
                </s.UnityText>
              </>
            )}
            <Button
              outlined
              onClick={() =>
                setQuantity((currentQuantity) => ++currentQuantity)
              }
              title="adicionar ao carrinho"
            >
              <PlusSign width={14} />
            </Button>
          </s.UnityContainer>
        </s.InfosFooter>
      </s.ProductCardInfos>
    </s.ProductCard>
  );
};

export default ProductsCards;
