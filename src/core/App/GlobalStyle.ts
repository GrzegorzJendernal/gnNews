import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    margin: 0;
    background-color: #FEFEFE;
    font-family: 'Lato', sans-serif;
    word-break: break-word;
  }
`;
