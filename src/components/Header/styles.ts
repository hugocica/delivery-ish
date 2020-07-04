import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary100};
  display: flex;
  height: 96px;
  justify-content: center;
  width: 100%;

  svg {
    fill: ${({ theme }) => theme.colors.primary100};
  }
`;
