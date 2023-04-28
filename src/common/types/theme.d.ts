export interface ThemeObject {
  [index: string]: string;
}

type ThemeString = string;

interface Colors {
  article: ThemeObject;
  background: ThemeString;
  button: ThemeObject;
  clockText: ThemeString;
  footerBackground: ThemeString;
  headerBackground: ThemeString;
  popup: ThemeObject;
  sideMenu: ThemeObject;
}

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: ThemeObject;
    colors: Colors;
    transition: {
      time: string;
    };
  }
}
