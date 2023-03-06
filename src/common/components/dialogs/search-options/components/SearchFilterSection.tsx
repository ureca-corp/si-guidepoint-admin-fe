import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { css } from "@emotion/react";

type SearchFilterSectionProps = {
  title: string;
  items: string[];
  value: string[];
  onToggle: (v: string) => void;
};

export const SearchFilterSection = ({
  title,
  items,
  value,
  onToggle,
}: SearchFilterSectionProps) => {
  return (
    <div>
      <Typography>{title}</Typography>

      <div css={st.row}>
        {items.map((it) => {
          const isChecked = !!value.find((item) => item === it);

          return (
            <FormControlLabel
              key={it}
              control={<Checkbox />}
              label={it}
              checked={isChecked}
              onChange={() => onToggle(it)}
            />
          );
        })}
      </div>
    </div>
  );
};

const st = {
  row: css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `,
};
