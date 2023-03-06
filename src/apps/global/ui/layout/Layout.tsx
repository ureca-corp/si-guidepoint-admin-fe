import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { GlobalAppbar } from "../appbar";
import { Sidebar } from "../sidebar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={st.root}>
      <GlobalAppbar />
      <div css={st.second}>
        <Sidebar />

        <main css={st.content}>{children}</main>
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  second: css`
    display: flex;
    height: 100%;

    background-color: ${LightColor.White};
    overflow: hidden;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  `,
};
