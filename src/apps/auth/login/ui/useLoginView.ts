import { RouterPath } from "@/apps/global/router";
import { useRouter } from "next/router";
import { useState } from "react";

export const useLoginView = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePwChange = (value: string) => {
    setPw(value);
  };

  const isValidForm = !!email && !!pw;
  const onSubmit = () => {
    // if success
    router.replace(RouterPath.Home);
  };

  return {
    email,
    handleEmailChange,
    pw,
    handlePwChange,
    isValidForm,
    onSubmit,
  };
};
