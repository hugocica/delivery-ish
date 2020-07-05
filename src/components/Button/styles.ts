import styled, { keyframes } from 'styled-components';

import Spinner from 'assets/icons/spinner.svg';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loading = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  position: absolute;
  top: 12px;
  right: ${({ theme }) => theme.spacing(2)}px;
  width: 24px;
`;

interface IButtonStyled {
  outlined?: boolean;
}

export const Button = styled.button<IButtonStyled>`
  background-color: ${({ color, theme, disabled, outlined }) => {
    if (disabled) {
      return theme.colors.gray2;
    }
    if (outlined) {
      return theme.colors.white;
    }

    return color === 'primary' ? theme.colors.primary100 : theme.colors.white;
  }};
  border: ${({ theme, outlined }) =>
    outlined ? `2px solid ${theme.colors.primary100}` : 'none'};
  border-radius: 4px;
  color: ${({ color, theme }) =>
    color === 'primary' ? theme.colors.white : theme.colors.primary100};
  height: 32px;
  outline: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'unset')};
  ${({ theme }) => theme.fonts.button};

  + ${Loading} {
    fill: ${({ color, theme }) =>
      color === 'primary' ? theme.colors.white : theme.colors.primary100};
  }
`;
