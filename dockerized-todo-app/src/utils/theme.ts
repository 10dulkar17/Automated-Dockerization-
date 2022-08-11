import { ThemeSchemes } from "../interfaces/theme";
import THEME_CONFIGS from "../config/theme";

export const getCurrentColors = (currentScheme: ThemeSchemes): void => {
  const schemes = {
    [ThemeSchemes.Light]: THEME_CONFIGS.colors.light,
    [ThemeSchemes.Dark]: THEME_CONFIGS.colors.dark,
  };

  return schemes[currentScheme];
};
