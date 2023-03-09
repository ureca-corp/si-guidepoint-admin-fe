import { NagativeOutlinedButton } from "@/common/components/buttons";
import { css } from "@emotion/react";
import { Button, TextField, Typography } from "@mui/material";
import { TermBaseFormModel } from "./models";
import { useTermBaseForm } from "./hooks";
import { Mq } from "@/common/theme";
import React from "react";

type TermBaseFormProps = {
  onCancel?: () => void;
  onSubmit?: (r: TermBaseFormModel) => void;
  defaultData?: TermBaseFormModel;
  readonly?: boolean;
};

export const TermBaseForm = React.memo(
  ({
    onCancel,
    onSubmit,
    defaultData,
    readonly = false,
  }: TermBaseFormProps) => {
    const {
      title,
      handleTitleChange,
      content,
      handleContentChange,
      isValidForm,
      result,
    } = useTermBaseForm(defaultData);

    return (
      <div css={st.root}>
        <div css={st.container}>
          <Typography css={st.title}>{"제목"}</Typography>
          <TextField
            fullWidth
            value={title}
            disabled={readonly}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>

        <div css={st.container}>
          <Typography css={st.title}>{"내용"}</Typography>
          <TextField
            fullWidth
            multiline
            rows={8}
            value={content}
            disabled={readonly}
            onChange={(e) => handleContentChange(e.target.value)}
          />
        </div>

        {!readonly && (
          <div css={st.buttonContainer}>
            <NagativeOutlinedButton onClick={onCancel}>
              {"취소"}
            </NagativeOutlinedButton>
            <Button
              variant={"contained"}
              disabled={!isValidForm}
              onClick={() => onSubmit && onSubmit(result)}
            >
              {"확인"}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 100%;
    height: 100%;
  `,
  container: css`
    display: flex;
    align-items: center;
    gap: 16px;

    @media ${Mq.md} {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  title: css`
    white-space: nowrap;
    min-width: 160px;
  `,
  buttonContainer: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  `,
};
