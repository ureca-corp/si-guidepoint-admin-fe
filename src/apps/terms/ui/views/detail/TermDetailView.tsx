import { RouterPath } from "@/apps/global/router";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { LightColor, Mq } from "@/common/theme";
import { css } from "@emotion/react";
import { EditRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import { TermBaseFormContainerCard } from "../../components";
import { TermDeleteDialogWithIconButton } from "../delete";
import { TitleWithContent } from "./el";
import { useTermDetailView } from "./UseTermDetailView";

export const TermDetailView = () => {
  const { termId, termData } = useTermDetailView();
  if (!termData) return <></>;

  return (
    <ListLayoutTemplate
      mainTitle={"이용약관"}
      subTitle={"상세보기"}
      subTitleRight={
        <div css={st.menuIconsContainer}>
          <Link
            href={{
              pathname: RouterPath.TermUpdate,
              query: { id: termId },
            }}
          >
            <SquareIconButton tooltip={"수정"}>
              <EditRounded />
            </SquareIconButton>
          </Link>

          <TermDeleteDialogWithIconButton termId={termId} />
        </div>
      }
    >
      <TermBaseFormContainerCard>
        <div css={formStyle.root}>
          <TitleWithContent title={"번호"} content={`${termData.id}`} />
          <TitleWithContent title={"제목"} content={termData?.title ?? ""} />
          <TitleWithContent title={"내용"} content={termData?.content ?? ""} />
          <TitleWithContent
            title={"생성일"}
            content={termData.createdAt ?? ""}
          />
          <TitleWithContent
            title={"최종 수정일"}
            content={termData.updatedAt ?? ""}
          />
          <TitleWithContent
            title={"삭제일"}
            content={termData.deletedAt ?? ""}
          />
        </div>
      </TermBaseFormContainerCard>
    </ListLayoutTemplate>
  );
};

const st = {
  menuIconsContainer: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};

const formStyle = {
  root: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  itemTitle: css`
    font-weight: 600;
  `,
};
