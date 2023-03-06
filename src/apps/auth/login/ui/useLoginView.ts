import { RouterPath } from "@/apps/global/router";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useSessionUser } from "../../session";
import { useRequestLogin } from "../infra";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePwChange = (value: string) => {
    setPw(value);
  };

  const isValidForm = !!email && !!pw;

  return {
    email,
    handleEmailChange,
    pw,
    handlePwChange,
    isValidForm,
  };
};

export const useLoginView = () => {
  const { email, handleEmailChange, pw, handlePwChange, isValidForm } =
    useLoginForm();

  const router = useRouter();
  const routeHome = () => router.replace(RouterPath.Home);

  const { setUser } = useSessionUser();

  const { requestLogin, data } = useRequestLogin({
    onNotMatchedAccount: () => {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
    },
  });
  const handleLoginSuccess = useCallback(() => {
    if (data) {
      const { accessToken } = data.adminLogin;
      setUser({ accessToken });

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
