import { Admin, MutationResetAdminPasswordArgs } from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type QueryResponse = {
  resetAdminPassword: Admin;
};

const USER_PASSWORD_RESET = gql`
  mutation ResetAdminPassword($email: String!) {
    resetAdminPassword(email: $email) {
      id
    }
  }
`;

export const useUserPasswordReset = () => {
  return useMutation<QueryResponse, MutationResetAdminPasswordArgs>(
    USER_PASSWORD_RESET
  );
};
