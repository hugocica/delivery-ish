import styled from 'styled-components';
import { Container as ContainerBootstrap } from 'styled-bootstrap-grid';

import InputText from 'components/InputText';

export const Container = styled(ContainerBootstrap)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

export const Input = styled(InputText)`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)}px;

  button {
    width: 100%;
    cursor: pointer;
  }
`;
