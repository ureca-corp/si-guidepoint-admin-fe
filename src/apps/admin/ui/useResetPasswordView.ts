import { RouterPath } from "@/apps/global/router";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLoginView = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const isValidForm = !!email;
  const onSubmit = () => {
    // if success
    alert(
      "새로운 비밀번호가 발송되었습니다.\n로그인 후 사용하실 비밀번호로 재설정해주세요."
    );
    router.replace(RouterPath.Login);
  };

  return {
    email,
    handleEmailChange,
    isValidForm,
    onSubmit,
  };
};
