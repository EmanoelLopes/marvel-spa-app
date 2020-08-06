import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import themes from './themes';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Work Sans', sans-serif;
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
  }

  h1, p {
    margin-top: 0;
  }

  a {
    text-decoration: none;
    color: ${themes.main.colors.red};
  }
`;

export default GlobalStyle;
