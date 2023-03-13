import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { TermBaseForm, BaseFormContainerCard } from "../../components";
import { useTermCreateView } from "./UseTermCreateView";

export const TermCreateView = () => {
  const { handleCancel, handleSubmit } = useTermCreateView();

  return (
    <ListLayoutTemplate
      mainTitle={"이용약관 생성"}
      subTitle={"새로운 이용약관을 작성합니다"}
    >
      <BaseFormContainerCard>
        <TermBaseForm onCancel={handleCancel} onSubmit={handleSubmit} />
      </BaseFormContainerCard>
    </ListLayoutTemplate>
  );
};
