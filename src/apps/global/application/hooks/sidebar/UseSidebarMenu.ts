import { SidebarMenuEntity, SidebarMenuItemEntity } from "../../../domain";
import { RouterPath } from "../../../router";

export const useGlobalSidebarMenu = () => {
  const menuList: SidebarMenuEntity[] = [
    new SidebarMenuEntity(1, "이용약관", [
      new SidebarMenuItemEntity(1, "이용약관 관리", RouterPath.Terms, "", 1),
    ]),
  ];

  return {
    menuList,
  };
};
