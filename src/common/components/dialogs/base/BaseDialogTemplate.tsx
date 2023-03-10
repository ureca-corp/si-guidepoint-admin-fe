import { LightColor } from "@/common/theme";
import { CloseRounded } from "@mui/icons-material";
import { css, Dialog, IconButton } from "@mui/material";
import { ReactNode } from "react";

export type BaseDialogTemplateProps = {
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
   * @description 본문 최하단 영역
   */
  bottom: ReactNode;
  /**
   * @description 앱바 - 하단 테두리 활성화 여부
   */
  appbarBorderEnabled?: boolean;
  /**
   * @description 바텀 영역 - 상단 테두리 활성화 여부
   */
  bottomBorderEnabled?: boolean;
};

export const BaseDialogTemplate = ({
  isOpen,
  onClose,
  title,
  body,
  bottom,
  appbarBorderEnabled = true,
  bottomBorderEnabled = true,
}: BaseDialogTemplateProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div css={[st.appbar, appbarBorderEnabled && st.appbarBorderBottom]}>
        {title}

        <IconButton edge={"end"} onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </div>
      <div css={st.bodyContainer}>
        <div css={st.body}>{body}</div>
        <div css={[st.bottom, bottomBorderEnabled && st.bottomBorderTop]}>
          {bottom}
        </div>
      </div>
    </Dialog>
  );
};

const st = {
  appbar: css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-width: 320px;

    padding: 12px 24px 12px 20px;
  `,
  appbarBorderBottom: css`
    border-bottom: 1px dashed ${LightColor.BorderColor2};
  `,

  bodyContainer: css`
    display: flex;
    flex-direction: column;
    padding: 4px 0px;
  `,

  body: css`
    display: flex;
    flex-direction: column;

    height: 100%;

    padding: 20px;
  `,

  bottom: css`
    padding: 20px;
  `,
  bottomBorderTop: css`
    border-top: 1px dashed ${LightColor.BorderColor2};
  `,
};
