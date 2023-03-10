import { atom, useRecoilState } from "recoil";
import { SidebarMenuItemEntity } from "../../../domain";

const globalSidebarSelectedMenuIdState = atom({
  key: "globalSidebarSelectedMenuIdState",
  default: 0,
});

export const useGlobalSidebarSelectedMenu = () => {
  const [selectedMenuId, setSelectedMenuId] = useRecoilState(
    globalSidebarSelectedMenuIdState
  );

  const onChange = (menuEntity: SidebarMenuItemEntity) => {
    setSelectedMenuId(menuEntity.id);
  };

  return {
    selectedMenuId,
    onChange,
  };
};
