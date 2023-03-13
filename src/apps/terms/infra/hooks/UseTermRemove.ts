import { MutationRemoveTermArgs, Term } from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type Response = {
  removeTerm: Term;
};

const REMOVE_TERM = gql`
  mutation RemoveTerm($id: Int!) {
    removeTerm(id: $id) {
      content
      id
      isRequired
      title
      createdAt
      deletedAt
      updatedAt
    }
  }
`;

export const useTermRemove = () => {
  return useMutation<Response, MutationRemoveTermArgs>(REMOVE_TERM);
};
