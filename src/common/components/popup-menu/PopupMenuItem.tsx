import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";

type PopupMenuItemButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const PopupMenuItemButton = ({
  onClick,
  children,
}: PopupMenuItemButtonProps) => {
  return (
    <Button fullWidth size="large" css={st.button} onClick={onClick}>
      <Typography variant={"subtitle2"} fontWeight={500}>
        {children}
      </Typography>
    </Button>
  );
};

const st = {
  button: css`
    justify-content: start;
  `,
};
