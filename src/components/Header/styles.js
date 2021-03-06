import styled from 'styled-components';
import { themes } from 'styles';

export const HeaderHome = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0;

  h1 {
    color: ${themes.main.colors.darkGrey};
    font-size: 26px;
    font-weight: 600;
    text-transform: uppercase;
  }

  img {
    margin: 1em 0;
  }

  p {
    color: ${themes.main.colors.grey};
  }
`;
