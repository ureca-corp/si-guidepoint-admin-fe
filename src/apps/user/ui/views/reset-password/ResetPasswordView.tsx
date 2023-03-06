import { EmailTextField } from "@/common/components/text-fields";
import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Button, Card, Typography } from "@mui/material";
import { useLoginView } from "./useResetPasswordView";

export const ResetPasswordView = () => {
  const { email, handleEmailChange, isValidForm, onSubmit } = useLoginView();

  return (
    <div css={st.root}>
      <Card css={st.inner}>
        <div css={st.title}>
          <Typography variant={"h4"}>{"비밀번호 재설정"}</Typography>
        </div>
        <div css={st.text}>
          <Typography variant={"body2"}>
            {
              "계정으로 사용하시는 이메일 주소를 입력하시면\n재설정된 임의의 비밀번호를 보내드립니다."
            }
          </Typography>
        </div>

        <EmailTextField
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          css={st.input}
        />

        <Button
          css={st.button}
          variant="contained"
          disabled={!isValidForm}
          onClick={onSubmit}
        >
          {"재설정하기"}
        </Button>
      </Card>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

    padding: 16px;
  `,
  inner: css`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    padding: 48px 36px;
  `,
  title: css`
    text-align: center;
  `,
  text: css`
    text-align: center;
    margin-top: 24px;
    margin-bottom: 40px;
  `,
  input: css`
    margin-bottom: 20px;
  `,
  forgotPassword: css`
    text-align: center;
    color: ${LightColor.MainSurfaceColor};
    margin-bottom: 20px;
  `,
  button: css`
    padding: 12px;
  `,
};
