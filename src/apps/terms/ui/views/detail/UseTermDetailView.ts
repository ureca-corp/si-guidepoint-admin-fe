import { useTerm } from "@/apps/terms/infra";
import { DateTimeUtil } from "@/common/utils";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

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

  const termData = useMemo(() => {
    const raw = data?.term;
    if (!raw) return raw;

    const { createdAt, updatedAt, deletedAt } = raw;

    return {
      ...raw,
      createdAt: DateTimeUtil.plainToLocaleString(createdAt),
      updatedAt: DateTimeUtil.plainToLocaleString(updatedAt),
      deletedAt: deletedAt && DateTimeUtil.plainToLocaleString(deletedAt),
    };
  }, [data]);

  return {
    termId,
    termData,
  };
};
