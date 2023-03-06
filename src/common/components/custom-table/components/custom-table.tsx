import { css } from "@emotion/react";
import { Card } from "@mui/material";
import { ReactNode } from "react";

type CustomTableProps = {
  headers: ReactNode[];
  rows: ReactNode[];
};

export const CustomTable = ({ headers, rows }: CustomTableProps) => {
  return (
    <Card>
      <div css={st.inner}>
        <div css={st.headerContainer}>{...headers}</div>
        <div css={st.rowContainer}>{rows}</div>
      </div>
    </Card>
  );
};

const st = {
  inner: css`
    display: flex;
    flex-direction: column;

    min-height: 260px;
    max-height: 100%;
  `,
  headerContainer: css`
    display: flex;
    align-items: center;
    width: 100%;
  `,
  rowContainer: css`
    display: flex;
    flex-direction: column;

    overflow: auto;
  `,
};
