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

  @media ${({ theme }) => theme.mediaQueries.lg} {
    width: calc(100% / 4 - 28px);
  }
  @media ${({ theme }) => theme.mediaQueries.md} {
    width: calc(100% / 3 - 28px);
  }
  @media ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
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

export const InfosFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductPrice = styled(Text)``;

export const UnityContainer = styled.div`
  align-items: center;
  display: flex;

  svg {
    fill: ${({ theme }) => theme.colors.primary100};
  }
`;

export const UnityText = styled(Text)`
  margin: 0 ${({ theme }) => theme.spacing(1)}px;
`;
