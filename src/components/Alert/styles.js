import styled from 'styled-components';
import { lighten } from 'polished';
import { themes } from 'styles';

export const AlertText = styled.p`
  padding: 24px;
  background-color: ${lighten(.4, themes.main.colors.red)};
  color: ${themes.main.colors.red};
  margin: 36px;
`;
