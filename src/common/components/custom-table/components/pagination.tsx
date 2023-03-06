import { css } from "@emotion/react";
import { Pagination, PaginationProps } from "@mui/material";

export const CustomTablePagination = (p: PaginationProps) => {
  return (
    <div css={st.root}>
      <Pagination color={"primary"} shape={"rounded"} {...p} />
    </div>
  );
};

const st = {
  root: css`
    margin-top: 24px;
  `,
};
