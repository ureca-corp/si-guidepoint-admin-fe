import { ReactNode } from "react";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";

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
      <div css={[st.root, st.depthPadding(depth)]}>
        {leftIcon}
        <Typography
          variant={"body1"}
          fontWeight={500}
          color={isSelected ? "primary" : ""}
        >
          {title}
        </Typography>
      </div>
    </Button>
  );
};

const st = {
  button: css`
    justify-content: start;
  `,
  root: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  depthPadding: (depth: number) => css`
    padding: 0 ${depth * 12}px;
  `,
};
