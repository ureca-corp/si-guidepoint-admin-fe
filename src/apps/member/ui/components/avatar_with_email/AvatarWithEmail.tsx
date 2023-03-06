import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Avatar, Typography } from "@mui/material";

type AvatarWithEmailProps = {
  email: string;
  profileImageUrl: string;
};

export const AvatarWithEmail = ({
  email,
  profileImageUrl,
}: AvatarWithEmailProps) => {
  return (
    <div css={st.row}>
      <Avatar alt={"logo"} src={profileImageUrl} css={st.avatarMini} />
      <Typography variant={"subtitle2"} fontWeight={400}>
        {email}
      </Typography>
    </div>
  );
};

const st = {
  row: css`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
  `,
  avatarMini: css`
    width: 24px;
    height: 24px;
  `,
};
