import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { CloseRounded, SearchRounded } from "@mui/icons-material";
import {
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { useSearchOptionsDialog, SearchOptionsDialogResult } from "./hooks";
import {
  SearchFilterSection,
  SearchSortDirectionSection,
  SearchSortTargetsSection,
} from "./components";

export type SearchOptionsDialogProps = {
  isOpen: boolean;
  onClose?: () => void;
  sortTargetItems?: string[];
  filterItems?: string[];
  defaultState?: SearchOptionsDialogResult;
  onSubmit?: (r: SearchOptionsDialogResult) => void;
};

export const SearchOptionsDialog = ({
  isOpen,
  onClose,
  defaultState,
  sortTargetItems,
  filterItems,
  onSubmit,
}: SearchOptionsDialogProps) => {
  const {
    sortItems,
    sortDirection,
    handleSortDirectionChange,
    sortTarget,
    handleSortTargetChange,
    filters,
    toggleFilter,
    keyword,
    handleKeywordChange,
    handleSearchSubmit,
  } = useSearchOptionsDialog({
    defaultState,
    onSubmit,
  });

  const isBodyExist = sortTargetItems || filterItems;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <section css={st.appbar}>
        <div css={st.appbarInner}>
          <Typography variant={"subtitle1"} fontWeight={600}>
            {"상세 검색"}
          </Typography>

          <IconButton onClick={onClose}>
            <CloseRounded />
          </IconButton>
        </div>
      </section>

      {isBodyExist && (
        <section css={st.body}>
          {sortTargetItems && (
            <Fragment>
              <SearchSortDirectionSection
                title={"정렬"}
                items={sortItems}
                value={sortDirection}
                onChange={handleSortDirectionChange}
              />

              <SearchSortTargetsSection
                title={"정렬 기준"}
                items={sortTargetItems}
                value={sortTarget}
                onChange={handleSortTargetChange}
              />
            </Fragment>
          )}

          {filterItems && (
            <SearchFilterSection
              title={"필터"}
              items={filterItems}
              value={filters}
              onToggle={toggleFilter}
            />
          )}
        </section>
      )}

      <section css={st.bottom}>
        <TextField
          fullWidth
          size={"small"}
          placeholder={"검색어를 입력해주세요"}
          InputProps={{
            sx: { paddingRight: 0 },
            endAdornment: (
              <InputAdornment position={"end"}>
                <IconButton onClick={handleSearchSubmit}>
                  <SearchRounded />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={keyword}
          onChange={(e) => handleKeywordChange(e.target.value)}
        />
      </section>
    </Dialog>
  );
};

const st = {
  appbar: css`
    min-width: 260px;

    padding: 8px 8px 8px 16px;

    border-bottom: 1px dashed ${LightColor.BorderColor2};
  `,
  appbarInner: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  body: css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    height: 100%;

    padding: 16px;

    overflow: auto;
  `,

  bottom: css`
    padding: 16px;

    border-top: 1px dashed ${LightColor.BorderColor2};
  `,
};
