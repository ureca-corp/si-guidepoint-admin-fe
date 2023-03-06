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

type ListViewCustomTableProps = {
  headerModels: CustomTableHeaderModel[];
  itemModels: CustomTableRowModel[];
};

export const ListViewCustomTable = ({
  headerModels,
  itemModels,
}: ListViewCustomTableProps) => {
  const { isLarge } = useCustomMediaQuery();

  if (isLarge) {
    return (
      <div css={st.accordionContainer}>
        <CustomAccordions models={convertToAccordionModels(itemModels)} />
        <CustomTablePagination />
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
          <CustomTableRow key={it.id} onClick={() => {}}>
            {it.columns.map((model, index) => (
              <CustomTableRowItem key={`${it.id}-${index}`} model={model} />
            ))}
          </CustomTableRow>
        ))}
      />
      <CustomTablePagination />
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
