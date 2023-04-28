import {createGlobalStyle, DefaultTheme} from "styled-components";

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    margin: 0;
    background-color:  ${({theme}) => theme.colors.background};
    font-family: 'Lato', sans-serif;
    word-break: break-word;
  }
`;
