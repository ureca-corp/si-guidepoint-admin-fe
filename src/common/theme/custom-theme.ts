import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { LightColor, lightPalette } from "./colors";
import { ScreenType } from "./screen";
import { lightTypographyOptions } from "./typography";

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: lightTypographyOptions,
  breakpoints: {
    values: {
      xs: 0,
      sm: ScreenType.sm + 1,
      md: ScreenType.md + 1,
      lg: ScreenType.lg + 1,
      xl: ScreenType.xl + 1,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
        style: {
          borderBottom: `1px solid ${LightColor.BorderColor1}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeLarge: {
          padding: "12px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out",

          "&:hover": {
            color: LightColor.PrimaryColor2,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${LightColor.BorderColor2}`,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: `0px 0px 2px ${LightColor.BorderColor1}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `${LightColor.BorderColor1} !important`,

            transition: "border-color 0.3s ease-in-out",
          },

          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: `${LightColor.PrimaryColor3} !important`,
            },
          },
        },
      },
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const findTheme = (theme: ThemeTypes) => {
  switch (theme) {
    default:
      return responsiveFontSizes(lightTheme);
  }
};

export const useThemeHook = () => {
  const [theme, setTheme] = useState(findTheme(ThemeTypes.Light));
  const palette = theme.palette;

  const colorMode = useMemo(
    () => (theme: ThemeTypes) => setTheme(findTheme(theme)),
    []
  );

  return {
    theme,
    palette,
    colorMode,
  };
};
