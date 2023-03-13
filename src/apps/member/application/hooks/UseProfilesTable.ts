import {
  CustomTableHeaderModel,
  CustomTableRowItemModel,
  CustomTableRowModel,
} from "@/common/components/custom-table";
import { DateTimeUtil } from "@/common/utils";
import { Profile } from "@/gql/graphql";

export const useProfilesTableModels = (profiles: Profile[]) => {
  const headerModels: CustomTableHeaderModel[] = [
    new CustomTableHeaderModel(1, "번호", "10%"), // 멤버 번호
    new CustomTableHeaderModel(2, "이름", "10%"),
    new CustomTableHeaderModel(3, "지원분야", "20%"),
    new CustomTableHeaderModel(4, "연락처", "20%"),
    new CustomTableHeaderModel(5, "주소", "20%"),
    new CustomTableHeaderModel(6, "등록일", "20%"),
    new CustomTableHeaderModel(7, "탈퇴여부", "10%"),
  ];

  const itemModels: CustomTableRowModel[] = profiles.map((it) => {
    const { createdAt, deletedAt } = it;

    const serialized = [
      it.memberId,
      `${it.personalInfo.firstName} ${it.personalInfo.middleInitial} ${it.personalInfo.lastName}`,
      it.participations,
      it.contactInfo.confirmEmail,
      `${it.residenceAddress.city} ${it.residenceAddress.country}`,
      createdAt && DateTimeUtil.plainToLocaleString(createdAt),
      deletedAt ? "탈퇴" : "X",
    ];

    const columns = serialized.map((it, index) => {
      const header = headerModels[index];
      return new CustomTableRowItemModel(header.title, `${it}`, header.width);
    });

    return new CustomTableRowModel(it.memberId, columns);
  });

  return {
    headerModels,
    itemModels,
  };
};
