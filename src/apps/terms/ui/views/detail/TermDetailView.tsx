import { RouterPath } from "@/apps/global/router";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { css } from "@emotion/react";
import { EditRounded } from "@mui/icons-material";
import Link from "next/link";
import { TermBaseForm, TermBaseFormContainerCard } from "../../components";
import { TermDeleteDialogWithIconButton } from "../delete";
import { useTermDetailView } from "./UseTermDetailView";

export const TermDetailView = () => {
  const { termId, formDefaultData } = useTermDetailView();

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
        <TermBaseForm defaultData={formDefaultData} />
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
