import { RouterPath } from "@/apps/global/router";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { ListViewCustomTable } from "@/apps/list";
import { useProfiles } from "@/apps/member/infra";
import { useProfilesTableModels } from "@/apps/member/infra/hooks/UseProfilesTable";
import { usePagination } from "@/common/hooks";
import { useRouter } from "next/router";

const PageSize = 10;

export const MembersView = () => {
  const router = useRouter();
  const handleItemClick = (itemId: number) => {
    router.push({
      pathname: RouterPath.Member,
      query: {
        id: itemId,
      },
    });
  };

  const { page, handlePageChange } = usePagination();

  const { data } = useProfiles({
    params: { pageRequest: { page, size: PageSize } },
  });

  const { headerModels, itemModels } = useProfilesTableModels(
    data?.profilesForAdmin?.items ?? []
  );

  const totalCount = data?.profilesForAdmin.metaData.totalPageCount ?? 0;

  return (
    <ListLayoutTemplate mainTitle={"회원 관리"} subTitle={"목록"}>
      <ListViewCustomTable
        headerModels={headerModels}
        itemModels={itemModels}
        pagenationProps={{
          page: page,
          count: totalCount,
          onChange: (_, page) => handlePageChange(page),
        }}
        onItemDetail={handleItemClick}
      />
    </ListLayoutTemplate>
  );
};
