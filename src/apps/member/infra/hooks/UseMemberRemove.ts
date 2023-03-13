import { Member, MutationRemoveMemberForAdminArgs } from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type Response = {
  removeMemberForAdminId: Member;
};

const REMOVE_MEMBER_FOR_ADMIN = gql`
  mutation Mutation($id: Int!) {
    removeMemberForAdmin(id: $id) {
      id
      email
    }
  }
`;

export const useMemberRemove = () => {
  return useMutation<Response, MutationRemoveMemberForAdminArgs>(
    REMOVE_MEMBER_FOR_ADMIN
  );
};
