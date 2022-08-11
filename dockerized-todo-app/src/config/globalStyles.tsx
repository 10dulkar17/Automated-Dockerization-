import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const Lato = "../assets/fonts/Lato/Lato-Regular.ttf";

const GlobalStyles: GlobalStyleComponent<any, any> = createGlobalStyle`
  * {
    font-family: "Lato", sans-serif;
  }

  @font-face {
    font-family: "Lato";
    src: local('Lato'), local('Lato'),
    url(${Lato}) format('ttf')
  }
`;

export default GlobalStyles;
