import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray4};
  display: flex;
  height: 54px;
  justify-content: center;
`;

export const Link = styled.a`
  ${({ theme }) => theme.fonts.button};
  border: 1px solid ${({ theme }) => theme.colors.primary100};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => `${theme.spacing(0.5)}px ${theme.spacing(1)}px}`};
  transition: all ease 0.3s;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;

  svg {
    transition: inherit;
  }
  p {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
    transition: inherit;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
