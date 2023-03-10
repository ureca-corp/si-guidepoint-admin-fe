import { useTerm, useTermUpdate } from "@/apps/terms/infra";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { TermBaseFormModel } from "../../components";

export const useTermUpdateView = () => {
  const router = useRouter();
  const termId = +(router.query.id ?? "");

  const [fetchTerm, { data, error }] = useTerm();
  const [requestTermUpdate] = useTermUpdate();

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

  const handleCancel = () => {
    router.back();
  };

  const handleSubmit = (r: TermBaseFormModel) => {
    const { title, content } = r;

    requestTermUpdate({
      variables: {
        updateTermInput: {
          id: termId,
          title,
          content,
        },
      },
    })
      .then((_) => {
        alert("이용약관을 수정했습니다.");
        router.back();
      })
      .catch((e: ApolloError) => {
        const errorCode = e.graphQLErrors[0].extensions.code;
        alert(`이용약관을 수정하지 못했습니다.\n [${errorCode}]`);
      });
  };

  return {
    formDefaultData,
    handleCancel,
    handleSubmit,
  };
};
