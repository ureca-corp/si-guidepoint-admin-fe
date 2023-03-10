import {
  CustomTableHeaderModel,
  CustomTableRowItemModel,
  CustomTableRowModel,
} from "@/common/components/custom-table";
import { DateTimeUtil } from "@/common/utils";
import { Term } from "@/gql/graphql";

export const useTermsTableModels = (terms: Term[]) => {
  const headerModels: CustomTableHeaderModel[] = [
    new CustomTableHeaderModel(1, "번호", "10%"),
    new CustomTableHeaderModel(2, "제목", "20%"),
    new CustomTableHeaderModel(4, "필수 여부", "10%"),
    new CustomTableHeaderModel(5, "생성일", "20%"),
    new CustomTableHeaderModel(6, "수정일", "20%"),
    new CustomTableHeaderModel(7, "삭제일", "20%"),
  ];

  const itemModels: CustomTableRowModel[] = terms.map((term) => {
    const { createdAt, updatedAt, deletedAt } = term;

    const serialized = [
      term.id,
      term.title,
      term.isRequired,
      createdAt && DateTimeUtil.plainToLocaleString(createdAt),
      updatedAt && DateTimeUtil.plainToLocaleString(updatedAt),
      deletedAt ? DateTimeUtil.plainToLocaleString(deletedAt) : "X",
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
