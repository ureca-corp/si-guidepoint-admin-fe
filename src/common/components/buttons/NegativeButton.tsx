import { Button, ButtonProps } from "@mui/material";
import { css } from "@emotion/react";
import { BlueGreyColors } from "@/common/theme";

export const NagativeButton = (p: ButtonProps) => {
  return (
    <Button
      css={css`
        color: ${BlueGreyColors.Shade200};
      `}
      color={"inherit"}
      {...p}
    />
  );
};
