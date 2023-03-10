import { BaseFormContainerCard } from "@/apps/global/ui/base";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { TermBaseForm } from "../../components";
import { useTermUpdateView } from "./UseTermUpdateView";

export const TermUpdateView = () => {
  const { formDefaultData, handleCancel, handleSubmit } = useTermUpdateView();

  return (
    <ListLayoutTemplate
      mainTitle={"이용약관 수정"}
      subTitle={"기존 이용약관을 수정합니다"}
    >
      <BaseFormContainerCard>
        <TermBaseForm
          defaultData={formDefaultData}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </BaseFormContainerCard>
    </ListLayoutTemplate>
  );
};
