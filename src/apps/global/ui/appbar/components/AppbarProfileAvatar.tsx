import { PopupMenuLogoutButton } from "@/apps/auth/logout";
import { RouterPath } from "@/apps/global/router";
import { useUserEmail, useUserProfileImage } from "@/apps/user";

import { AvatarWithEmail } from "@/apps/user/ui/components";
import { PopupMenu, PopupMenuItemButton } from "@/common/components/popup-menu";
import { css } from "@emotion/react";
import { Avatar, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export const AppbarProfileAvatar = () => {
  const { email } = useUserEmail();
  const { profileImageUrl } = useUserProfileImage();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(ev.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge={"end"} onClick={handleClick}>
        <Avatar alt={"logo"} src={profileImageUrl} css={st.avatar} />
      </IconButton>

      <PopupMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <div css={st.avatarWithEmailWrapper}>
          <AvatarWithEmail email={email} profileImageUrl={profileImageUrl} />
        </div>

        <Link href={RouterPath.UpdatePassword}>
          <PopupMenuItemButton>{"비밀번호 변경"}</PopupMenuItemButton>
        </Link>
        <PopupMenuLogoutButton />
      </PopupMenu>
    </div>
  );
};

const st = {
  avatar: css`
    width: 28px;
    height: 28px;
  `,
  avatarWithEmailWrapper: css`
    padding: 4px 2px;
  `,
};
