import styled from 'styled-components';
import { themes } from 'styles';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${themes.main.colors.red};

  p {
    text-align: center;
    margin: 0;

    a {
      color: ${themes.main.colors.white};
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
