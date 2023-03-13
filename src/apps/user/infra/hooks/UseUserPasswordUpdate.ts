import { Admin, MutationUpdateAdminPasswordArgs } from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type QueryResponse = {
  updateAdminPassword: Admin;
};

const USER_PASSWORD_UPDATE = gql`
  mutation UpdateAdminPassword($input: UpdateAdminPasswordInput) {
    updateAdminPassword(input: $input) {
      id
    }
  }
`;

export const useUserPasswordUpdate = () => {
  return useMutation<QueryResponse, MutationUpdateAdminPasswordArgs>(
    USER_PASSWORD_UPDATE
  );
};
