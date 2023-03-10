import { RouterPath } from "@/apps/global/router";
import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { useTerm } from "@/apps/terms/infra";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { EditRounded } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import {
  TermBaseForm,
  TermBaseFormContainerCard,
  TermBaseFormModel,
} from "../../components";
import { useTermDetailView } from "./UseTermDetailView";

export const TermDetailView = () => {
  const { termId, formDefaultData } = useTermDetailView();

  return (
    <ListLayoutTemplate
      mainTitle={"이용약관"}
      subTitle={"상세보기"}
      subTitleRight={
        <div>
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
        </div>
      }
    >
      <TermBaseFormContainerCard>
        <TermBaseForm defaultData={formDefaultData} />
      </TermBaseFormContainerCard>
    </ListLayoutTemplate>
  );
};
