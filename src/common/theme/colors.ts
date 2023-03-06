import { PaletteOptions } from "@mui/material";

export enum BlueGreyColors {
  Shade900 = "#263238",
  Shade800 = "#37474F",
  Shade700 = "#455A64",
  Shade600 = "#546E7A",
  Shade500 = "#607D8B",
  Shade400 = "#78909C",
  Shade300 = "#90A4AE",
  Shade200 = "#B0BEC5",
  Shade100 = "#CFD8DC",
  Shade50 = "#ECEFF1",
}

export enum LightColor {
  PrimaryColor1 = "#2951D7",
  PrimaryColor2 = "#2951D7dd",
  PrimaryColor3 = "#2951D7bb",

  BorderColor1 = "#e0e0e0",
  BorderColor2 = "#e0e0e099",

  TextColor1 = "#546E7A",

  MainSurfaceColor = "#ECEFF199",

  HoverColor = "#ECEFF199",

  White = "#fff",
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: LightColor.PrimaryColor2,
  },
  text: {
    primary: LightColor.TextColor1,
    secondary: LightColor.TextColor1,
  },
};
