import { useState } from "react";

export const useLoginForm = () => {
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
