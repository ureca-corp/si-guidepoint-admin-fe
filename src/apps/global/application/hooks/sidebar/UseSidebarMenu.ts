import { SidebarMenuEntity, SidebarMenuItemEntity } from "../../../domain";
import { RouterPath } from "../../../router";

export const useGlobalSidebarMenu = () => {
  const menuList: SidebarMenuEntity[] = [
    new SidebarMenuEntity(1, "회원", [
      new SidebarMenuItemEntity(1, "회원 관리", RouterPath.Members, "", 1),
    ]),
    new SidebarMenuEntity(2, "이용약관", [
      new SidebarMenuItemEntity(2, "이용약관 관리", RouterPath.Terms, "", 1),
    ]),
  ];

  return {
    menuList,
  };
};
