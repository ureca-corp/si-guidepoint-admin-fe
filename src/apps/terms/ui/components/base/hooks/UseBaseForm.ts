import { useEffect, useState } from "react";
import { TermBaseFormModel } from "../models/BaseForm.model";

export const useTermBaseForm = (defaultData?: TermBaseFormModel) => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (v: string) => {
    setTitle(v);
  };

  const [content, setContent] = useState("");
  const handleContentChange = (v: string) => {
    setContent(v);
  };

  const isValidForm = !!title && !!content;
  const result: TermBaseFormModel = {
    title,
    content,
  };

  useEffect(() => {
    if (!defaultData) return;

    setTitle(defaultData.title);
    setContent(defaultData.content);
  }, [defaultData]);

  return {
    title,
    handleTitleChange,
    content,
    handleContentChange,
    isValidForm,
    result,
  };
};
