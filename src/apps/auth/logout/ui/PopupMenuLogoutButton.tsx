import { PopupMenuItemButton } from "@/common/components/popup-menu";
import { useLogout } from "../application";

export const PopupMenuLogoutButton = () => {
  const { handleLogout } = useLogout();

  const handleItemClick = () => {
    alert("정상적으로 로그아웃 되었습니다.");
    handleLogout();
  };

  return (
    <PopupMenuItemButton onClick={handleItemClick}>
      {"로그아웃"}
    </PopupMenuItemButton>
  );
};
