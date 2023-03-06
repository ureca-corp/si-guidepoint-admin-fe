import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";

// 액세스 토큰 보유 여부 체크
export const withAuth = (
  WrappedComponent: NextComponentType<NextPageContext, any, {}>
) => {
  const Component = (props: any) => {
    const router = useRouter();

    if (typeof window !== "undefined") {
      const accessToken = sessionStorage.getItem("user");

      if (!accessToken) {
        router.replace("/login");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Component;
};
