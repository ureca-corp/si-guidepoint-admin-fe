import { BaseFormContainerCard } from "@/apps/global/ui/base";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { useRouter } from "next/router";
import { MemberDeleteDialogWithIconButton } from "../delete/MemberDeleteIconButton";

export const MemberDetailView = () => {
  const router = useRouter();
  const memberId = +(router.query.id ?? "");

  console.log(memberId);

  return (
    <ListLayoutTemplate
      mainTitle={"멤버"}
      subTitle={"상세보기"}
      subTitleRight={<MemberDeleteDialogWithIconButton memberId={memberId} />}
    >
      <BaseFormContainerCard>asd</BaseFormContainerCard>
    </ListLayoutTemplate>
  );
};
