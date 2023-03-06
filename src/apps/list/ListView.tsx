import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import {
  SearchOptionsDialogResult,
  SearchOptionsIconButton,
} from "@/common/components/dialogs/search-options";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { css } from "@emotion/react";
import { AddRounded } from "@mui/icons-material";
import { useMemberTableModels } from "../member/application/hooks";
import { ListViewCustomTable } from "./components";

export const ListView = () => {
  const { headerModels, itemModels } = useMemberTableModels();

  const sortTargetItems = ["번호", "제목", "생성일", "필수 여부", "상태"];
  const filterItems = ["번호", "제목", "생성일", "필수 여부", "상태"];

  const searchOptionsDefault: SearchOptionsDialogResult = {
    sortTarget: sortTargetItems[0],
  };

  const handleSubmit = (r: SearchOptionsDialogResult) => {
    console.log(r);
  };

  return (
    <ListLayoutTemplate
      mainTitle={"멤버관리"}
      subTitle={"목록"}
      subTitleRight={
        <div css={st.subTitleRight}>
          <SearchOptionsIconButton
            sortTargetItems={sortTargetItems}
            filterItems={filterItems}
            defaultState={searchOptionsDefault}
            onSubmit={handleSubmit}
          />

          <SquareIconButton tooltip={"추가"}>
            <AddRounded />
          </SquareIconButton>
        </div>
      }
    >
      <ListViewCustomTable
        headerModels={headerModels}
        itemModels={itemModels}
      />
    </ListLayoutTemplate>
  );
};

const st = {
  subTitleRight: css`
    display: flex;
    gap: 8px;
  `,
};
