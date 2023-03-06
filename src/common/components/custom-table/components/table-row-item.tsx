import { CustomTableRowItemModel } from "../models";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

type CustomTableRowItemProps = {
  model: CustomTableRowItemModel;
};

export const CustomTableRowItem = ({ model }: CustomTableRowItemProps) => {
  return (
    <div
      css={[
        st.root,
        css`
          width: ${model.width};
          min-width: ${model.minWidth};
          max-width: ${model.maxWidth};
        `,
      ]}
    >
      <Typography variant={"subtitle2"}>{model.value}</Typography>
    </div>
  );
};

const st = {
  root: css`
    display: flex;

    padding: 12px 16px;
  `,
};
