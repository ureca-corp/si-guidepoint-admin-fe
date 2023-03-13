import { useMemberRemove } from "@/apps/member/infra";
import { ConfirmDialogTemplate } from "@/common/components/dialogs";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { useDialog } from "@/common/hooks";
import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";
import { DeleteForeverRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

type MemberDeleteDialogWithIconButtonProps = {
  memberId: number;
};

export const MemberDeleteDialogWithIconButton = ({
  memberId,
}: MemberDeleteDialogWithIconButtonProps) => {
  const router = useRouter();
  const { open, handleOpen, handleClose } = useDialog();

  const [requestMemberRemove] = useMemberRemove();
  const handleDelete = () => {
    requestMemberRemove({ variables: { id: memberId } })
      .then((_) => {
        alert("회원을 강제 탈퇴시켰습니다.");
        router.back();
      })
      .catch((e: ApolloError) => {
        const errorCode = e.graphQLErrors[0].extensions.code;
        alert(`회원을 탈퇴시키지 못했습니다.\n [${errorCode}]`);
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
            {"회원 강제 탈퇴"}
          </Typography>
        }
        body={
          <Typography variant={"body1"} css={st.bodyText}>
            {
              "정말 이 회원을 강제 탈퇴시키겠어요?\n탈퇴 후에도 목록에는 보입니다."
            }
          </Typography>
        }
        onCancel={handleClose}
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
