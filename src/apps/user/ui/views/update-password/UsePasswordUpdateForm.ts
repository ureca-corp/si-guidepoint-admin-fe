import { passwordRegex } from "@/apps/global/application";
import { useState } from "react";

export const usePasswordUpdateForm = () => {
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [newPwRepeat, setNewPwRepeat] = useState("");

  const handleOldPwChange = (v: string) => {
    setOldPw(v);
  };

  const handleNewPwChange = (v: string) => {
    setNewPw(v);
  };

  const handleNewPwRepeatChange = (v: string) => {
    setNewPwRepeat(v);
  };

  const isValidPw = passwordRegex.test(newPw);
  const isPwError = !!newPw && !isValidPw;
  const pwErrorText =
    isPwError &&
    "비밀번호는 영문 대소문자, 특수문자를 포함한 8~20자로 설정해주세요.";

  const isPwRepeatError = !!newPwRepeat && newPw !== newPwRepeat;
  const pwRepeatErrorText = isPwRepeatError && "비밀번호가 일치하지 않습니다.";

  const isValidForm = !!oldPw && isValidPw && !isPwRepeatError;

  return {
    oldPw,
    handleOldPwChange,

    newPw,
    handleNewPwChange,
    pwErrorText,

    newPwRepeat,
    handleNewPwRepeatChange,
    pwRepeatErrorText,

    isValidForm,
  };
};
