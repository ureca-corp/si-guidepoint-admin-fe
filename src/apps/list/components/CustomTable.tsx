import {
  CustomAccordions,
  CustomAccordionItemModel,
  CustomAccordionModel,
} from "@/common/components/custom-accordion";

import {
  CustomTable,
  CustomTableContainer,
  CustomTableHeader,
  CustomTablePagination,
  CustomTableRow,
  CustomTableRowItem,
  CustomTableHeaderModel,
  CustomTableRowModel,
} from "@/common/components/custom-table";

import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { OpenInNewRounded } from "@mui/icons-material";
import { Button, PaginationProps, Typography } from "@mui/material";

type ListViewCustomTableProps = {
  headerModels: CustomTableHeaderModel[];
  itemModels: CustomTableRowModel[];
  pagenationProps?: PaginationProps;
  onItemDetail?: (itemId: number) => void;
};

export const ListViewCustomTable = ({
  headerModels,
  itemModels,
  pagenationProps,
  onItemDetail,
}: ListViewCustomTableProps) => {
  const { isLarge } = useCustomMediaQuery();

  if (isLarge) {
    return (
      <div css={st.accordionContainer}>
        <CustomAccordions
          models={convertToAccordionModels(itemModels)}
          itemBottomActions={(id: number) => (
            <div css={st.accordionItemBottomContainer}>
              <Button
                endIcon={<OpenInNewRounded css={st.accordionDetailLinkIcon} />}
                onClick={() => onItemDetail && onItemDetail(id)}
              >
                <Typography variant={"caption"}>{"상세보기"}</Typography>
              </Button>
            </div>
          )}
        />
        <CustomTablePagination {...pagenationProps} />
      </div>
    );
  }

  return (
    <CustomTableContainer>
      <CustomTable
        headers={headerModels.map((it) => (
          <CustomTableHeader key={it.id} model={it} />
        ))}
        rows={itemModels.map((it) => (
          <CustomTableRow
            key={it.id}
            onClick={() => onItemDetail && onItemDetail(it.id)}
          >
            {it.columns.map((model, index) => (
              <CustomTableRowItem key={`${it.id}-${index}`} model={model} />
            ))}
          </CustomTableRow>
        ))}
      />
      <CustomTablePagination {...pagenationProps} />
    </CustomTableContainer>
  );
};

const st = {
  accordionContainer: css`
    display: flex;
    flex-direction: column;
    height: 100%;

    overflow: hidden;
  `,
  accordionItemBottomContainer: css`
    display: flex;
    justify-content: flex-end;
    opacity: 0.8;
  `,
  accordionDetailLinkIcon: css`
    width: 16px;
  `,
};

// helper
const convertToAccordionModels = (
  models: CustomTableRowModel[]
): CustomAccordionModel[] => {
  return models.map(
    (it) =>
      new CustomAccordionModel(
        `${it.id}`,
        it.columns[1].value,
        it.columns.map(
          (col) => new CustomAccordionItemModel(col.key, col.value)
        )
      )
  );
};
