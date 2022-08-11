export enum ThemeSchemes {
  Light = "light",
  Dark = "dark",
}

export interface ThemeProps {
  current: ThemeSchemes;
  colors: any;
}
