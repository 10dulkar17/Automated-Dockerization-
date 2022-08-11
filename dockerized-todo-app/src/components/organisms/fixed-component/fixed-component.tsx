import React, { useContext } from "react";
import { AppContext } from "../../../contexts/app-context";
import { ThemeSchemes } from "../../../interfaces/theme";

import CustomButton from "../../atoms/custom-button";
import { Navbar, Menu } from "./fixed-component.styles";

const FixedComponent: React.FC<any> = () => {
  const { theme, switchTheme } = useContext<any>(AppContext);

  return (
    <Navbar>
      <Menu>
        <CustomButton onClick={switchTheme}>
          {theme.current === ThemeSchemes.Light ? "☀️" : "🌛"}
        </CustomButton>
      </Menu>
    </Navbar>
  );
};

export default FixedComponent;
