import styled from 'styled-components';

interface IInput {
  hasContent: boolean;
}

export const Input = styled.input<IInput>`
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-bottom-color: ${({ theme, hasContent }) =>
    hasContent ? theme.colors.primary100 : theme.colors.gray3};
  border-bottom-width: 3px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  flex: 1;
  height: 46px;
  padding: 0 ${({ theme }) => theme.spacing(2)}px;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary100};
  }
`;
