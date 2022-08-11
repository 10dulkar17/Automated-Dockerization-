/* eslint-disable no-unused-vars */
import { ThemeProps, ThemeSchemes } from "../interfaces/theme";

/**
 * Theme config:
 * The definitions of the 'theme'
 * object will be considered as
 * the default version for the theme.
 */

const defaultColors = {
  light: "#FFFF",
  brand: "#5B00D0",
};

const theme: ThemeProps = {
  current: ThemeSchemes.Light,
  colors: {
    light: {
      ...defaultColors,
      primary: "#5B00D0",
      secondary: "#E9E6F2",
      secondaryAlt: "#F7F3FF",
      tertiary: "#131629",
      lightGray: "#7A7F8D",
      sideMenu: "",
    },
    dark: {
      ...defaultColors,
      primary: "#5B00D0",
      secondary: "#242424",
      secondaryAlt: "#1D1D1F",
      tertiary: "#5b00d0",
      lightGray: "#7A7F8D",
      sideMenu: "",
    },
  },
};

export default theme;
