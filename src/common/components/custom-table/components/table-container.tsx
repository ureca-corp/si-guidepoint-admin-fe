import { css } from "@emotion/react";
import { ReactNode } from "react";

type CustomTableContainerProps = {
  children: ReactNode;
};

export const CustomTableContainer = ({
  children,
}: CustomTableContainerProps) => {
  return <div css={st.root}>{children}</div>;
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  `,
};
