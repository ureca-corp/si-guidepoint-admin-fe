import { RouterPath } from "@/apps/global/router";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { SessionKey } from ".";

// Login 세션 체크 후 라우팅
export const PrivateRoute = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const accessToken = sessionStorage.getItem(SessionKey.User);

    if (!accessToken) {
      router.replace(RouterPath.Login);
      return <></>;
    }

    return <>{children}</>;
  }

  return <></>;
};
