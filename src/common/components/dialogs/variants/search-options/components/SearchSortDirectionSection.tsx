import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { SearchOptionsSortDirectionType } from "../states";

type SearchSortDirectionSectionProps = {
  title: string;
  items: SearchOptionsSortDirectionType[];
  value: SearchOptionsSortDirectionType;
  onChange: (v: SearchOptionsSortDirectionType) => void;
};

export const SearchSortDirectionSection = ({
  title,
  items,
  value,
  onChange,
}: SearchSortDirectionSectionProps) => {
  const handleChange = (key: string) => {
    const target = items.find((it) => it.key === key);
    if (!target) return;

    onChange(target);
  };

  return (
    <div>
      <Typography>{title}</Typography>

      <RadioGroup row value={value.key} onChange={(_, v) => handleChange(v)}>
        {items?.map((it, index) => (
          <FormControlLabel
            key={`${index + 1}-${it}`}
            value={it.key}
            control={<Radio />}
            label={it.label}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
