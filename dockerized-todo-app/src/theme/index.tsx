import React from "react";
import { ThemeProvider as Provider } from "styled-components";

const ThemeProvider: React.FC<any> = ({ children, theme }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
