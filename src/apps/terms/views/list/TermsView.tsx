import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { ListViewCustomTable } from "@/apps/list";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { usePagination } from "@/common/hooks";
import { AddRounded } from "@mui/icons-material";
import { useTermsTableModels } from "../../application";
import { useTerms } from "../../infra";

const PageSize = 10;

export const TermsView = () => {
  const { page, handlePageChange } = usePagination();

  const { data } = useTerms({ pageRequest: { page, size: PageSize } });
  const { headerModels, itemModels } = useTermsTableModels(
    data?.terms.items ?? []
  );

  const totalCount = data?.terms.metaData.totalItemCount ?? 0;

  return (
    <ListLayoutTemplate
      mainTitle={"이용약관 관리"}
      subTitle={"목록"}
      subTitleRight={
        <SquareIconButton
          tooltip={"추가"}
          onClick={() => {
            // TODO:
            alert("TODO");
          }}
        >
          <AddRounded />
        </SquareIconButton>
      }
    >
      <ListViewCustomTable
        headerModels={headerModels}
        itemModels={itemModels}
        pagenationProps={{
          page: page,
          count: totalCount,
          onChange: (_, page) => handlePageChange(page),
        }}
      />
    </ListLayoutTemplate>
  );
};
