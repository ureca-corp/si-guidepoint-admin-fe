import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";

export const LayoutTemplateStyle = {
  rootPadding: css`
    padding: 48px;

    @media ${MediaQueries.md} {
      padding: 16px;
    }
  `,
};
