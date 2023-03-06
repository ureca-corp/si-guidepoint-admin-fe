import { useSessionUser } from "@/apps/auth/session";

export const useUserEmail = () => {
  const { user } = useSessionUser();
  const { email } = user;

  return {
    email,
  };
};
