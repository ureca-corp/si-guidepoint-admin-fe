import { css } from "@emotion/react";
import { ReactNode } from "react";
import {
  LayoutMainTitleSection,
  LayoutSubTitleSection,
  LayoutTemplateStyle,
} from "../common";

type ListLayoutTemplateProps = {
  mainTitle: string;
  subTitle: string;
  subTitleRight?: ReactNode;
  children: ReactNode;
};

export const ListLayoutTemplate = ({
  mainTitle,
  subTitle,
  subTitleRight,
  children,
}: ListLayoutTemplateProps) => {
  return (
    <div css={st.root}>
      <LayoutMainTitleSection title={mainTitle} />
      <LayoutSubTitleSection subTitle={subTitle} right={subTitleRight} />

      {children}
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${LayoutTemplateStyle.rootPadding};
  `,
};
