import { LightColor, Mq } from "@/common/theme";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

type TitleWithContentProps = {
  title: string;
  content: string;
};

export const TitleWithContent = ({ title, content }: TitleWithContentProps) => {
  return (
    <div css={st.root}>
      <Typography variant={"subtitle1"} css={st.title}>
        {title}
      </Typography>
      <Typography>{content}</Typography>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid ${LightColor.BorderColor2};

    @media ${Mq.sm} {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  title: css`
    font-weight: 600;
    white-space: nowrap;
    min-width: 160px;
  `,
};
