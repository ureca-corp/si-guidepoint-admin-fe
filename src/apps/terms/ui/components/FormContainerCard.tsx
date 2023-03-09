import { Mq } from "@/common/theme";
import { css } from "@emotion/react";
import Card, { CardProps } from "@mui/material/Card";

export const TermBaseFormContainerCard = (p: CardProps) => {
  return (
    <Card
      css={css`
        padding: 48px 36px;

        @media ${Mq.md} {
          padding: 24px;
        }
      `}
      {...p}
    />
  );
};
