import { css } from "@emotion/react";
import { Pagination } from "@mui/material";

export const CustomTablePagination = () => {
  return (
    <div css={st.root}>
      <Pagination color={"primary"} shape={"rounded"} />
    </div>
  );
};

const st = {
  root: css`
    margin-top: 24px;
  `,
};
