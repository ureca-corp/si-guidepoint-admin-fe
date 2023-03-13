import { IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import UrecaLogoSmall from "@/ic_ureca.svg";
import { css } from "@emotion/react";

export const UrecaSupportIconButton = () => {
  return (
    <Link href={"https://ureca.im/"} target={"_blank"}>
      <Tooltip title={"개발 지원"}>
        <IconButton size={"small"}>
          <UrecaLogoSmall
            width={16}
            height={16}
            css={css`
              stroke: #2951d7;
              opacity: 0.6;
            `}
          />
        </IconButton>
      </Tooltip>
    </Link>
  );
};
