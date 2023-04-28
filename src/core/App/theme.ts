import {DefaultTheme} from "styled-components";
import {ThemeObject} from "../../common/types/theme";

const colorNames: ThemeObject = {
  white: "#FEFEFE",
  tundora: "#4D4D4D",
  lightTundora: "#666666",
  transparentBlack: "rgba(0, 0, 0, 0.5)",
  silver: "#cccccc",
  black: "#000000FF",
  mercury: "#E6E6E6",
};

export const theme: DefaultTheme = {
  breakpoints: {
    tiny: "467px",
    small: "524px",
    mobile: "767px",
    medium: "991px",
    large: "1081px",
    mediumDesktop: "1440px",
  },
  colors: {
    article: {
      background: colorNames.silver,
      hover: colorNames.mercury,
    },
    background: colorNames.white,
    button: {
      active: colorNames.lightTundora,
      background: colorNames.black,
      border: colorNames.white,
      hover: colorNames.tundora,
      text: colorNames.white,
    },
    clockText: colorNames.white,
    footerBackground: colorNames.black,
    headerBackground: colorNames.black,
    popup: {
      background: colorNames.white,
      wrapperBackground: colorNames.transparentBlack,
    },
    sideMenu: {
      active: colorNames.white,
      background: colorNames.tundora,
      hover: colorNames.lightTundora,
      text: colorNames.white,
    },
  },
  transition: {
    time: "0.4s",
  },
};
