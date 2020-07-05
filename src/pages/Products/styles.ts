import styled from 'styled-components';

import Text from 'components/Text';

export const UppercaseBoldText = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => `${theme.spacing(2)}px -${theme.spacing(2)}px`};
`;

export const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 8px;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
  margin: ${({ theme }) => theme.spacing(2)}px;
  overflow: hidden;
  width: calc(100% / 5 - 28px);
`;

export const ProductCardImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    height: 150px;
  }
`;

export const ProductCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(2)}px`};
`;

export const InfosHeader = styled.div``;

export const ProductCardCategoryTag = styled.div`
  background-color: ${({ theme }) => theme.colors.primary100};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  ${({ theme }) => theme.fonts.caption};
`;

export const ProductName = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const InfosFooter = styled.div``;

export const ProductPrice = styled(Text)``;
