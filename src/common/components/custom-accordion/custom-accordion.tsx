import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { CustomAccordionModel } from "./models";

type CustomAccordionsProps = {
  models: CustomAccordionModel[];
  itemBottomActions?: (id: number) => ReactNode;
};

export const CustomAccordions = ({
  models,
  itemBottomActions,
}: CustomAccordionsProps) => {
  const [expanded, setExpanded] = useState("");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };

  return (
    <div css={st.root}>
      {models.map((it) => {
        console.log(it);
        return (
          <Accordion
            key={it.titleFirst}
            expanded={expanded === `${it.titleFirst}`}
            onChange={handleChange(`${it.titleFirst}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreRounded />}>
              <div css={st.titleContainer}>
                <div css={st.titleFirst}>
                  <Typography variant={"subtitle2"}>{it.titleFirst}</Typography>
                </div>

                <Typography>{it.titleSecond}</Typography>
              </div>
            </AccordionSummary>

            <AccordionDetails css={st.contentContainer}>
              {it.items.map((item) => (
                <div key={`${item.key}- ${item.value}`} css={st.row}>
                  <div css={st.itemKey}>
                    <Typography variant={"subtitle2"}>{item.key}</Typography>
                  </div>

                  <Typography variant={"body2"} css={st.itemValue}>
                    {item.value}
                  </Typography>
                </div>
              ))}

              {itemBottomActions && itemBottomActions(+it.items[0].value)}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    padding: 4px;

    overflow: auto;
  `,
  titleContainer: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  titleFirst: css`
    min-width: 24px;
  `,
  contentContainer: css`
    border-top: 1px dashed ${LightColor.BorderColor2};
  `,
  row: css`
    display: flex;
    align-items: center;
    gap: 8px;

    height: 36px;
  `,
  itemKey: css`
    min-width: 80px;
  `,
  itemValue: css`
    white-space: pre-line;
    word-break: break-all;
  `,
};
