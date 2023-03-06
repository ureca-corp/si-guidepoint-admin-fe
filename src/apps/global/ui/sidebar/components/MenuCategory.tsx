import { BlueGreyColors } from "@/common/theme/colors";
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { css } from "@emotion/react";

type SidebarMenuCategoryProps = {
  children: ReactNode;
};

export const SidebarMenuCategory = ({ children }: SidebarMenuCategoryProps) => {
  return (
    <div css={st.root}>
      <Typography
        variant={"subtitle2"}
        fontWeight={400}
        color={BlueGreyColors.Shade400}
      >
        {children}
      </Typography>
    </div>
  );
};

const st = {
  root: css`
    padding: 16px;
    min-height: 48px;
  `,
};
