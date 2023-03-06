import { RouterPath } from "@/apps/global/router";
import { PopupMenuItemButton } from "@/common/components/popup-menu";
import { useRouter } from "next/router";
import { useSessionUser } from "../../session";

export const PopupMenuLogoutButton = () => {
  const router = useRouter();
  const { removeUser } = useSessionUser();

  const handleLogout = () => {
    removeUser();
    alert("정상적으로 로그아웃 되었습니다.");

    router.replace(RouterPath.Login);
  };

  return (
    <PopupMenuItemButton onClick={handleLogout}>
      {"로그아웃"}
    </PopupMenuItemButton>
  );
};
