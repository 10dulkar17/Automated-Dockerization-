import React from "react";
import { AppContext } from "../../../contexts/app-context";
import { ThemeSchemes } from "../../../interfaces/theme";

import CustomButton from "../custom-button";

const SwitchThemeButton: React.FC<any> = (props) => {
  const { theme, switchTheme } = React.useContext<any>(AppContext);
  return (
    <CustomButton onClick={switchTheme} style={props.style}>
      {theme.current === ThemeSchemes.Light ? "☀️" : "🌛"}
    </CustomButton>
  );
};

export default SwitchThemeButton;
