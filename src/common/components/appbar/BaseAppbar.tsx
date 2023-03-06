import { AppBar, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import { css } from "@emotion/react";

type BaseAppbarProps = {
  leftIcon?: ReactNode;
  title?: ReactNode;
  right?: ReactNode;
};

export const BaseAppbar = ({ leftIcon, title, right }: BaseAppbarProps) => {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <div css={st.inner}>
          <div css={st.leftContainer}>
            {leftIcon}
            {title}
          </div>

          {right}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const st = {
  inner: css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  `,
  leftContainer: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};
