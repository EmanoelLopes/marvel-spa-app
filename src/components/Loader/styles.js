import styled from 'styled-components';
import { themes } from 'styles';

export const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0;
  width: 100%;

  p {
    color: ${themes.main.colors.red};
    font-size: 1em;
  }
`;
