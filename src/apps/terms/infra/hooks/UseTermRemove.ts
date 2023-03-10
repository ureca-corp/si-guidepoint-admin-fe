import {
  MutationRemoveTermArgs,
  MutationUpdateTermArgs,
  Term,
} from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type Response = {
  removeTerm: Term;
};

const REMOVE_TERM = gql`
  mutation RemoveTerm($id: Int!) {
    removeTerm(id: $id) {
      content
      createdAt
      deletedAt
      id
      isRequired
      title
      updatedAt
    }
  }
`;

export const useTermRemove = () => {
  return useMutation<Response, MutationRemoveTermArgs>(REMOVE_TERM);
};
