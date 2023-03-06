import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { ReactNode } from "react";

type CustomTableRowProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const CustomTableRow = ({ children, onClick }: CustomTableRowProps) => {
  if (!onClick) {
    return <div css={st.root}>{children}</div>;
  }

  return (
    <Button css={st.root} onClick={onClick}>
      {children}
    </Button>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;

    padding: 0;

    border-bottom: 1px solid ${LightColor.BorderColor2};
    border-radius: 0;

    &:hover {
      background-color: ${LightColor.HoverColor};
    }
  `,
};
