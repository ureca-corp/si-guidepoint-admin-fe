import { RouterPath } from "@/apps/global/router";
import { EmailTextField } from "@/common/components/text-fields";
import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { LockRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useLoginView } from "./useLoginView";

export const LoginView = () => {
  const {
    email,
    handleEmailChange,
    pw,
    handlePwChange,
    isValidForm,
    onSubmit,
  } = useLoginView();

  return (
    <div css={st.root}>
      <Card css={st.inner}>
        <div css={st.title}>
          <Typography variant={"h4"}>{"LOGIN"}</Typography>
        </div>
        <div css={st.text}>
          <Typography variant={"body1"}>{"로그인 후 이용해주세요."}</Typography>
        </div>

        <EmailTextField
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          css={st.input}
        />

        <TextField
          type="password"
          value={pw}
          onChange={(e) => handlePwChange(e.target.value)}
          css={st.input}
          label="Password"
          placeholder="* * * * * * * *"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
        />
        <Link href={RouterPath.ResetPassword}>
          <div css={st.forgotPassword}>
            <Typography variant={"body2"}>
              {"비밀번호를 잊으셨나요?"}
            </Typography>
          </div>
        </Link>

        <Button
          css={st.button}
          variant="contained"
          disabled={!isValidForm}
          onClick={onSubmit}
        >
          {"LOGIN"}
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
