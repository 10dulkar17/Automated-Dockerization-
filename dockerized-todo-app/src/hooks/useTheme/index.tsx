import { useState, useEffect } from "react";
import { ThemeProps, ThemeSchemes } from "../../interfaces/theme";
import { getCurrentColors } from "../../utils/theme";

import THEME_CONFIGS from "../../config/theme";

const useTheme: any = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>(THEME_CONFIGS);

  const switchTheme = (): void => {
    setCurrentTheme((values: any) => {
      return {
        ...values,
        current:
          values.current == ThemeSchemes.Light
            ? ThemeSchemes.Dark
            : ThemeSchemes.Light,
        colors:
          values.current == ThemeSchemes.Light
            ? getCurrentColors(ThemeSchemes.Dark)
            : getCurrentColors(ThemeSchemes.Light),
      };
    });
  };

  useEffect(() => {
    setCurrentTheme((prev) => {
      return { ...prev, colors: getCurrentColors(prev.current) };
    });

    return function cleanup() {
      setCurrentTheme(THEME_CONFIGS);
    };
  }, []);

  return [currentTheme, switchTheme];
};

export default useTheme;
