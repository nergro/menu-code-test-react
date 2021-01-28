import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${(props) => props.theme.colors.text.primary};
  }

  html, body, #root {
    height: 100%
  }

`;
