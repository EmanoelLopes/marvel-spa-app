import styled from 'styled-components';
import { themes } from 'styles';

export const FooterWrapper = styled.footer`
  align-items: center;
  background-color: ${themes.main.colors.red};
  display: flex;
  justify-content: center;
  padding: 16px 0;
  width: 100%;

  p {
    margin: 0;
    text-align: center;

    a {
      color: ${themes.main.colors.white};
      display: block;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
