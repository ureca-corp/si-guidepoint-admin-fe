import { useTerm } from "@/apps/terms/infra";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { TermBaseFormModel } from "../../components";

export const useTermDetailView = () => {
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

  return {
    termId,
    formDefaultData,
  };
};
