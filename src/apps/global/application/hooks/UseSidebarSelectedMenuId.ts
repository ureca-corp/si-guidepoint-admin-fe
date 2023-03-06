import { atom, useRecoilState } from "recoil";

const globalSidebarSelectedMenuIdState = atom({
  key: "globalSidebarSelectedMenuIdState",
  default: 0,
});

export const useGlobalSidebarSelectedMenuId = () => {
  const [selectedMenuId, setSelectedMenuId] = useRecoilState(
    globalSidebarSelectedMenuIdState
  );

  const onChange = (id: number) => setSelectedMenuId(id);

  return {
    selectedMenuId,
    onChange,
  };
};
