import {
  CustomTableHeaderModel,
  CustomTableRowItemModel,
  CustomTableRowModel,
} from "@/common/components/custom-table";
import { Term } from "@/gql/graphql";

export const useTermsTableModels = (terms: Term[]) => {
  const headerModels: CustomTableHeaderModel[] = [
    new CustomTableHeaderModel(1, "번호", "10%"),
    new CustomTableHeaderModel(2, "제목", "35%"),
    new CustomTableHeaderModel(4, "필수 여부", "15%"),
    new CustomTableHeaderModel(5, "생성일", "15%"),
    new CustomTableHeaderModel(6, "수정일", "15%"),
    new CustomTableHeaderModel(7, "삭제일", "15%"),
  ];

  const itemModels: CustomTableRowModel[] = terms.map((term) => {
    const serialized = [
      term.id,
      term.title,
      term.isRequired,
      term.createdAt,
      term.updatedAt,
      term.deletedAt ?? "",
    ];

    const columns = serialized.map((it, index) => {
      const header = headerModels[index];
      return new CustomTableRowItemModel(header.title, `${it}`, header.width);
    });

    return new CustomTableRowModel(term.id, columns);
  });

  return {
    headerModels,
    itemModels,
  };
};
