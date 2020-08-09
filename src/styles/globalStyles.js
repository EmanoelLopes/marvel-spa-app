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

  p {
    color: ${themes.main.colors.darkGrey};
  }

  a {
    color: ${themes.main.colors.red};
    text-decoration: none;
  }

  ul {
    padding: 0;
  }

  ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
