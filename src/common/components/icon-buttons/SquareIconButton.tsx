import { LightColor } from "@/common/theme/colors";
import { css, IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

type SquareIconButtonProps = {
  tooltip?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const SquareIconButton = ({
  tooltip = "",
  disabled = false,
  onClick,
  children,
}: SquareIconButtonProps) => (
  <Tooltip title={tooltip}>
    <IconButton
      size={"small"}
      css={st.iconButton}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IconButton>
  </Tooltip>
);

const st = {
  iconButton: css`
    border: 1px solid ${LightColor.BorderColor2};
    border-radius: 4px;
  `,
};
