import { SortAsc, SortDesc } from "@/apps/global/domain";
import { useEffect, useState } from "react";
import { SearchOptionsSortDirectionType } from "../states";

export type SearchOptionsDialogResult = {
  sortDirection?: SearchOptionsSortDirectionType;
  sortTarget?: string;
  filters?: string[];
  keyword?: string;
};

type UseSearchOptionsDialogProps = {
  defaultState?: SearchOptionsDialogResult;
  onSubmit?: (r: SearchOptionsDialogResult) => void;
};

export const useSearchOptionsDialog = ({
  defaultState,
  onSubmit,
}: UseSearchOptionsDialogProps) => {
  const defaultSortDirection = defaultState?.sortDirection ?? new SortAsc();
  const defaultSortTarget = defaultState?.sortTarget ?? "";
  const defaultFilters = defaultState?.filters ?? [];

  //
  const sortItems = [new SortAsc(), new SortDesc()];
  const [sortDirection, setSortDirection] =
    useState<SearchOptionsSortDirectionType>(defaultSortDirection);

  const handleSortDirectionChange = (v: SearchOptionsSortDirectionType) => {
    setSortDirection(v);
  };

  //
  const [sortTarget, setSortTarget] = useState(defaultSortTarget);

  const handleSortTargetChange = (v: string) => {
    setSortTarget(v);
  };

  //
  const [filters, setFilters] = useState<string[]>(defaultFilters);

  const toggleFilter = (v: string) => {
    const isExist = filters.find((it) => it === v);

    if (isExist) {
      return setFilters((old) => old.filter((it) => it !== v));
    }

    setFilters((old) => [...old, v]);
  };

  //
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (v: string) => {
    setKeyword(v);
  };

  const handleSearchSubmit = () => {
    handleSubmit();
  };

  //
  const handleSubmit = () => {
    onSubmit &&
      onSubmit({
        sortDirection,
        sortTarget,
        filters,
        keyword,
      });
  };

  useEffect(() => {
    handleSubmit();
  }, [sortDirection, sortTarget, filters]);

  return {
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
  };
};
