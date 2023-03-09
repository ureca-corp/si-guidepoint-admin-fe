import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { useTerm } from "@/apps/terms/infra";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import {
  TermBaseForm,
  TermBaseFormContainerCard,
  TermBaseFormModel,
} from "../../components";

export const TermDetailView = () => {
  const router = useRouter();
  const termId = +(router.query.id ?? "");

  const [fetchTerm, { data, error }] = useTerm();

  useEffect(() => {
    if (!error) return;

    alert(
      `데이터가 존재하지 않습니다.\n[${error.graphQLErrors[0].extensions.code}]`
    );
    router.back();
  }, [error]);

  useEffect(() => {
    if (!termId) return;

    fetchTerm({ variables: { id: termId } });
  }, [termId]);

  const formDefaultData = useMemo<TermBaseFormModel>(
    () => ({
      title: data?.term.title ?? "",
      content: data?.term.content ?? "",
    }),
    [data]
  );

  return (
    <ListLayoutTemplate mainTitle={"이용약관"} subTitle={"상세보기"}>
      <TermBaseFormContainerCard>
        <TermBaseForm readonly={true} defaultData={formDefaultData} />
      </TermBaseFormContainerCard>
    </ListLayoutTemplate>
  );
};
