import { Button, ButtonProps } from "@mui/material";
import { css } from "@emotion/react";
import { BlueGreyColors } from "@/common/theme";

export const NagativeOutlinedButton = (p: ButtonProps) => {
  return (
    <div
      css={css`
        color: ${BlueGreyColors.Shade200};
      `}
    >
      <Button variant={"outlined"} color={"inherit"} {...p} />
    </div>
  );
};
