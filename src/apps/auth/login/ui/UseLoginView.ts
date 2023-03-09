import { RouterPath } from "@/apps/global/router";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useSessionUser } from "../../session";
import { useRequestLogin } from "../infra";
import { useLoginForm } from "./UseLoginForm";

export const useLoginView = () => {
  const { email, handleEmailChange, pw, handlePwChange, isValidForm } =
    useLoginForm();

  // =================================================================

  const router = useRouter();
  const routeHome = () => router.replace(RouterPath.Home);

  // =================================================================

  const { setUser } = useSessionUser();

  const { requestLogin, data } = useRequestLogin({
    onNotMatchedAccount: () => {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    },
  });
  const handleLoginSuccess = useCallback(() => {
    if (data) {
      const { user, accessToken } = data.adminLogin;
      setUser({ userId: user.userId, email: user.email, accessToken });

      routeHome();
    }
  }, [data]);

  const onSubmit = () => requestLogin({ variables: { email, password: pw } });

  useEffect(() => {
    handleLoginSuccess();
  }, [handleLoginSuccess]);

  return {
    email,
    handleEmailChange,
    pw,
    handlePwChange,
    isValidForm,
    onSubmit,
  };
};
