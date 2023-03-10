import { useTermRemove } from "@/apps/terms/infra";
import { ConfirmDialogTemplate } from "@/common/components/dialogs";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { useDialog } from "@/common/hooks";
import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";
import { DeleteForeverRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

type TermDeleteDialogWithIconButtonProps = {
  termId: number;
};

export const TermDeleteDialogWithIconButton = ({
  termId,
}: TermDeleteDialogWithIconButtonProps) => {
  const router = useRouter();
  const { open, handleOpen, handleClose } = useDialog();

  const [requestTermRemove] = useTermRemove();
  const handleDelete = () => {
    requestTermRemove({ variables: { id: termId } })
      .then((_) => {
        alert("이용약관을 삭제했습니다.");
        router.back();
      })
      .catch((e: ApolloError) => {
        const errorCode = e.graphQLErrors[0].extensions.code;
        alert(`이용약관을 삭제하지 못했습니다.\n [${errorCode}]`);
      });
  };

  return (
    <div>
      <SquareIconButton tooltip={"삭제"} onClick={handleOpen}>
        <DeleteForeverRounded />
      </SquareIconButton>

      <ConfirmDialogTemplate
        isOpen={open}
        onClose={handleClose}
        title={
          <Typography variant={"subtitle1"} fontWeight={600}>
            {"이용약관 삭제"}
          </Typography>
        }
        body={
          <Typography variant={"body1"} css={st.bodyText}>
            {"정말 이 이용약관을 삭제하시겠어요?\n삭제 후 되돌릴 수 없습니다."}
          </Typography>
        }
        onCancel={handleClose}
        textConfirm={"삭제"}
        onConfirm={handleDelete}
      />
    </div>
  );
};

const st = {
  bodyText: css`
    white-space: pre-line;
  `,
};
