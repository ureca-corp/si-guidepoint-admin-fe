import { Typography } from "@mui/material";

type LayoutMainTitleSectionProps = {
  title: String;
};

export const LayoutMainTitleSection = ({
  title,
}: LayoutMainTitleSectionProps) => {
  return (
    <section>
      <Typography variant={"h4"} fontWeight={600}>
        {title}
      </Typography>
    </section>
  );
};
