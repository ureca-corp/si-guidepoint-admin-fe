import { useTermCreate } from "@/apps/terms/infra";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/router";
import { TermBaseFormModel } from "../../components";

export const useTermCreateView = () => {
  const [requestTermCreate] = useTermCreate();
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleSubmit = (r: TermBaseFormModel) => {
    const { title, content } = r;

    requestTermCreate({
      variables: {
        createTermInput: {
          title,
          content,
          isRequired: true,
        },
      },
    })
      .then((_) => {
        alert("새로운 이용약관을 등록했습니다.");
        router.back();
      })
      .catch((e: ApolloError) => {
        const errorCode = e.graphQLErrors[0].extensions.code;
        alert(`이용약관을 등록하지 못했습니다.\n [${errorCode}]`);
      });
  };

  return {
    handleCancel,
    handleSubmit,
  };
};
