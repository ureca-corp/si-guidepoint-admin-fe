import { RouterPath } from "@/apps/global/router";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { ListViewCustomTable } from "@/apps/list";
import { useTermsTableModels } from "@/apps/terms/application";
import { useTerms } from "@/apps/terms/infra";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { usePagination } from "@/common/hooks";
import { AddRounded } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

const PageSize = 10;

export const TermsView = () => {
  const router = useRouter();
  const handleItemClick = (itemId: number) => {
    router.push({
      pathname: RouterPath.Term,
      query: {
        id: itemId,
      },
    });
  };

  const { page, handlePageChange } = usePagination();

  const { data } = useTerms({
    params: { pageRequest: { page, size: PageSize } },
  });
  const { headerModels, itemModels } = useTermsTableModels(
    data?.terms.items ?? []
  );

  const totalCount = data?.terms.metaData.totalPageCount ?? 0;

  return (
    <ListLayoutTemplate
      mainTitle={"이용약관 관리"}
      subTitle={"목록"}
      subTitleRight={
        <Link href={RouterPath.TermCreate}>
          <SquareIconButton tooltip={"추가"}>
            <AddRounded />
          </SquareIconButton>
        </Link>
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
        onItemClick={handleItemClick}
      />
    </ListLayoutTemplate>
  );
};
