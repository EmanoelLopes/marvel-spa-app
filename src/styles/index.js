import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    font-family: 'Work Sans', sans-serif;
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
  }
`;

export default GlobalStyle;
