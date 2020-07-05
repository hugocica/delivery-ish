import React, { useState } from 'react';
import { IProduct } from './types';

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
          <s.ProductCardCategoryTag>
            {product?.productVariants[0]?.subtitle
              ? product.productVariants[0].subtitle
              : 'Sem categoria'}
          </s.ProductCardCategoryTag>
          <s.ProductName>{product.title}</s.ProductName>
        </s.InfosHeader>

        <s.InfosFooter>
          <s.ProductPrice color="gray4" bold>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.productVariants[0].price)}
          </s.ProductPrice>
        </s.InfosFooter>
      </s.ProductCardInfos>
    </s.ProductCard>
  );
};

export default ProductsCards;
