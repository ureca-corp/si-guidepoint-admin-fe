import { SidebarMenuEntity, SidebarMenuItemEntity } from "../../domain";

export const useGlobalSidebarMenu = () => {
  const menuList: SidebarMenuEntity[] = [
    new SidebarMenuEntity(1, "정산", [
      new SidebarMenuItemEntity(1, "", "정산달력", 1),
      new SidebarMenuItemEntity(2, "", "정산내역", 1),
    ]),
    new SidebarMenuEntity(2, "결제조회", [
      new SidebarMenuItemEntity(3, "", "통합결제", 1),
      new SidebarMenuItemEntity(4, "", "신용 • 체크카드", 2),
      new SidebarMenuItemEntity(5, "", "현금영수증", 1),
    ]),
    new SidebarMenuEntity(3, "결제위젯", [
      new SidebarMenuItemEntity(6, "", "결제 UI 설정", 1),
      new SidebarMenuItemEntity(7, "", "약관 설정", 1),
    ]),
    new SidebarMenuEntity(4, "계약 • 운영", [
      new SidebarMenuItemEntity(8, "", "회사정보", 1),
      new SidebarMenuItemEntity(9, "", "이용정보", 1),
      new SidebarMenuItemEntity(10, "", "사용자 관리", 1),
      new SidebarMenuItemEntity(11, "", "부가세신고 자료", 1),
    ]),
  ];

  return {
    menuList,
  };
};
