import { useLogout } from "@/apps/auth/logout";
import { GqlErrors } from "@/apps/global/infra/gql";
import { useUserPasswordUpdate } from "@/apps/user/infra";
import { ApolloError } from "@apollo/client";

export const usePasswordUpdateView = () => {
  const { handleLogout } = useLogout();
  const [updatePassword] = useUserPasswordUpdate();

  const handleUpdatePassword = (oldPw: string, newPw: string) => {
    updatePassword({
      variables: { input: { oldPassword: oldPw, newPassword: newPw } },
    })
      .then(() => {
        alert("비밀번호를 변경했습니다.\n다시 로그인해주세요.");
        handleLogout();
      })
      .catch((e: ApolloError) => {
        const errorCode = e.graphQLErrors[0].extensions.code;

        if (errorCode === GqlErrors.Unauthorized) {
          return alert("기존 비밀번호가 일치하지 않습니다.");
        }

        alert(`비밀번호를 변경하지 못했습니다.\n [${errorCode}]`);
      });
  };

  return {
    handleUpdatePassword,
  };
};
