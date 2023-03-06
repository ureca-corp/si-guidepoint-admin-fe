import { BlueGreyColors } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { CustomTableHeaderModel } from "../models";

type CustomTableHeaderProps = {
  model: CustomTableHeaderModel;
};

export const CustomTableHeader = ({ model }: CustomTableHeaderProps) => {
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
      <Typography variant={"subtitle2"}>{model.title}</Typography>
    </div>
  );
};

const st = {
  root: css`
    display: flex;

    padding: 12px 16px;
    background-color: ${BlueGreyColors.Shade50};
  `,
};
