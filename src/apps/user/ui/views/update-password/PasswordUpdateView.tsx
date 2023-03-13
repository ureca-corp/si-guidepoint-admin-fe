import { GqlErrors } from "@/apps/global/infra/gql";
import { RouterPath } from "@/apps/global/router";
import { BaseFormContainerCard } from "@/apps/global/ui/base";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { useUserPasswordUpdate } from "@/apps/user/infra";
import { PasswordTextField } from "@/common/components/text-fields";
import { ApolloError } from "@apollo/client";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { usePasswordUpdateForm } from "./UsePasswordUpdateForm";
import { usePasswordUpdateView } from "./UsePasswordUpdateView";

export const PasswordUpdateView = () => {
  const {
    oldPw,
    handleOldPwChange,
    newPw,
    handleNewPwChange,
    pwErrorText,
    newPwRepeat,
    handleNewPwRepeatChange,
    pwRepeatErrorText,
    isValidForm,
  } = usePasswordUpdateForm();

  const { handleUpdatePassword } = usePasswordUpdateView();

  return (
    <ListLayoutTemplate
      mainTitle={"관리자 비밀번호 변경"}
      subTitle={"기존 비밀번호와 변경하실 비밀번호를 입력해주세요"}
    >
      <div css={st.root}>
        <BaseFormContainerCard>
          <div css={st.inner}>
            <div css={st.passwordContainer}>
              <PasswordTextField
                label={"Old Password"}
                value={oldPw}
                onChange={(e) => handleOldPwChange(e.target.value)}
              />

              <div css={st.newPasswordContainer}>
                <PasswordTextField
                  label={"New Password"}
                  value={newPw}
                  onChange={(e) => handleNewPwChange(e.target.value)}
                  error={!!pwErrorText}
                  helperText={pwErrorText}
                />

                <PasswordTextField
                  label={"New Password Repeat"}
                  value={newPwRepeat}
                  onChange={(e) => handleNewPwRepeatChange(e.target.value)}
                  error={!!pwRepeatErrorText}
                  helperText={pwRepeatErrorText}
                />
              </div>
            </div>

            <Button
              css={st.button}
              variant="contained"
              fullWidth
              disabled={!isValidForm}
              onClick={() => handleUpdatePassword(oldPw, newPw)}
            >
              {"변경하기"}
            </Button>
          </div>
        </BaseFormContainerCard>
      </div>
    </ListLayoutTemplate>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    max-width: 460px;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    gap: 36px;
  `,
  passwordContainer: css`
    display: flex;
    flex-direction: column;
    gap: 36px;
  `,
  newPasswordContainer: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  button: css`
    padding: 12px;
  `,
};
