import { RouterPath } from "@/apps/global/router";
import { useRouter } from "next/router";
import { useSessionUser } from "../../session";

export const useLogout = () => {
  const router = useRouter();
  const { removeUser } = useSessionUser();

  const handleLogout = () => {
    removeUser();
    router.replace(RouterPath.Login);
  };

  return {
    handleLogout,
  };
};
