import { css } from "@emotion/react";
import { BaseDialogTemplate } from "../base";
import { ReactNode } from "react";
import { Button } from "@mui/material";
import { NagativeButton } from "../../buttons";

type ConfirmDialogTemplateProps = {
  isOpen: boolean;
  onClose?: () => void;
  /**
   * @description 다이얼로그 타이틀
   */
  title: ReactNode;
  /**
   * @description 본문 영역
   */
  body: ReactNode;
  /**
   * @description 앱바 - 하단 테두리 활성화 여부
   */
  appbarBorderEnabled?: boolean;
  /**
   * @description 취소 버튼 텍스트
   * @default "취소"
   */
  textCancel?: string;
  onCancel?: () => void;
  /**
   * @description 확인 버튼 텍스트
   * @default "확인"
   */
  textConfirm?: string;
  onConfirm?: () => void;
};

/**
 * @description [취소, 확인] 버튼들이 최하단에 존재하는 다이얼로그
 */
export const ConfirmDialogTemplate = ({
  isOpen,
  onClose,
  title,
  body,
  appbarBorderEnabled = true,
  textCancel = "취소",
  onCancel,
  textConfirm = "확인",
  onConfirm,
}: ConfirmDialogTemplateProps) => {
  return (
    <BaseDialogTemplate
      isOpen={isOpen}
      onClose={onClose}
      appbarBorderEnabled={appbarBorderEnabled}
      bottomBorderEnabled={false}
      title={title}
      body={body}
      bottom={
        <div css={st.bottom}>
          <Button fullWidth variant={"contained"} onClick={onCancel}>
            {textCancel}
          </Button>
          <NagativeButton fullWidth onClick={onConfirm}>
            {textConfirm}
          </NagativeButton>
        </div>
      }
    />
  );
};

const st = {
  bottom: css`
    display: flex;
    gap: 8px;
  `,
};
