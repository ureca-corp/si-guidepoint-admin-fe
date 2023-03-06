import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

type SearchSortTargetsSectionProps = {
  title: string;
  items: string[];
  value: string;
  onChange: (v: string) => void;
};

export const SearchSortTargetsSection = ({
  title,
  items,
  value,
  onChange,
}: SearchSortTargetsSectionProps) => {
  return (
    <div>
      <Typography>{title}</Typography>

      <RadioGroup row value={value} onChange={(_, v) => onChange(v)}>
        {items?.map((it, index) => (
          <FormControlLabel
            key={`${index + 1}-${it}`}
            value={it}
            control={<Radio />}
            label={it}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
