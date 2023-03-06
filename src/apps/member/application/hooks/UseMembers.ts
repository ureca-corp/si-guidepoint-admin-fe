import {
  CustomTableHeaderModel,
  CustomTableRowItemModel,
  CustomTableRowModel,
} from "@/common/components/custom-table/models";

export const useMemberTableModels = () => {
  const headerModels: CustomTableHeaderModel[] = [
    new CustomTableHeaderModel(1, "번호", "160px"),
    new CustomTableHeaderModel(2, "제목", "100%"),
    new CustomTableHeaderModel(3, "생성일", "360px"),
    new CustomTableHeaderModel(4, "필수 여부", "160px"),
    new CustomTableHeaderModel(5, "상태", "160px"),
  ];

  const itemModels: CustomTableRowModel[] = Array.from(
    { length: 20 },
    (_, index) =>
      new CustomTableRowModel(index + 1, [
        new CustomTableRowItemModel("번호", `${index + 1}`, "160px"),
        new CustomTableRowItemModel("제목", "프로모션 정보 수신 동의", "100%"),
        new CustomTableRowItemModel(
          "생성일",
          "2022. 12. 21. 오후: 7:08:25",
          "360px"
        ),
        new CustomTableRowItemModel("필수 여부", "선택", "160px"),
        new CustomTableRowItemModel("공개여부", "공개", "160px"),
      ])
  );

  return {
    headerModels,
    itemModels,
  };
};
