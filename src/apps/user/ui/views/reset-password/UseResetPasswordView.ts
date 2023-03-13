import { RouterPath } from "@/apps/global/router";
import { useUserPasswordReset } from "@/apps/user/infra";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export const useResetPasswordView = () => {
  const router = useRouter();

  const [resetPassword] = useUserPasswordReset();

  const [email, setEmail] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const isValidForm = !!email;
  const onSubmit = () => {
    resetPassword({
      variables: { email },
    })
      .then(() => {
        alert(
          "새로운 비밀번호가 발송되었습니다.\n로그인 후 사용하실 비밀번호로 재설정해주세요."
        );

        router.replace(RouterPath.Login);
      })
      .catch((e: ApolloError) => {
        const errorCode = e.graphQLErrors[0].extensions.code;

        alert(`비밀번호를 리셋하지 못했습니다.\n [${errorCode}]`);
      });
  };

  return {
    email,
    handleEmailChange,
    isValidForm,
    onSubmit,
  };
};
