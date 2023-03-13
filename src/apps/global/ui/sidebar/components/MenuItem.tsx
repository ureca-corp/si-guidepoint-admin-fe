import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { LightColor } from "@/common/theme";

type SidebarMenuItemProps = {
  leftIcon: ReactNode;
  title: string;
  depth?: number;
  isSelected?: boolean;
  onClick?: () => void;
};

export const SidebarMenuItem = ({
  leftIcon,
  title,
  depth = 1,
  isSelected = false,
  onClick,
}: SidebarMenuItemProps) => {
  return (
    <Button fullWidth size={"large"} css={st.button} onClick={onClick}>
      <Stack
        css={st.root(depth)}
        color={isSelected ? "primary" : LightColor.TextColor1}
      >
        <div css={st.leftIconWrapper}>{leftIcon}</div>

        <Typography variant={"body1"} fontWeight={500} color={"inherit"}>
          {title}
        </Typography>
      </Stack>
    </Button>
  );
};

const st = {
  button: css`
    justify-content: start;
  `,
  root: (depth: number) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    padding: 0 ${depth * 12}px;
  `,
  leftIconWrapper: css`
    display: flex;
    opacity: 0.8;
  `,
};
