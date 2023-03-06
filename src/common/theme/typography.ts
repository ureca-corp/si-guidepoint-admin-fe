import { TypographyOptions } from "@mui/material/styles/createTypography";
import { LightColor } from "./colors";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard",
  allVariants: {
    color: LightColor.TextColor1,
  },
  body1: {
    fontWeight: "300",
  },
  body2: {
    fontWeight: "300",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
