import { SearchRounded } from "@mui/icons-material";
import { useState } from "react";
import { SquareIconButton } from "../../icon-buttons";
import { SearchOptionsDialogResult } from "./hooks";
import { SearchOptionsDialog } from "./SearchOptionsDialog";

type SearchOptionsIconButtonProps = {
  sortTargetItems?: string[];
  filterItems?: string[];
  defaultState?: SearchOptionsDialogResult;
  onSubmit?: (r: SearchOptionsDialogResult) => void;
};

export const SearchOptionsIconButton = ({
  sortTargetItems,
  filterItems,
  defaultState,
  onSubmit,
}: SearchOptionsIconButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SquareIconButton tooltip={"검색"} onClick={handleOpen}>
        <SearchRounded />
      </SquareIconButton>

      <SearchOptionsDialog
        isOpen={open}
        onClose={handleClose}
        sortTargetItems={sortTargetItems}
        filterItems={filterItems}
        defaultState={defaultState}
        onSubmit={onSubmit}
      />
    </div>
  );
};
