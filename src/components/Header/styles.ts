import styled from 'styled-components';

import Logo from 'assets/icons/beer.svg';

export const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
  display: flex;
  height: 96px;
  justify-content: center;
  width: 100%;
`;

export const BeerLogo = styled(Logo)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.primary100};
`;