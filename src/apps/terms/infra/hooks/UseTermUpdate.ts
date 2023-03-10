import { MutationUpdateTermArgs, Term } from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type Response = {
  updateTerm: Term;
};

const UPDATE_TERM = gql`
  mutation UpdateTerm($updateTermInput: UpdateTermInput!) {
    updateTerm(updateTermInput: $updateTermInput) {
      content
      updatedAt
      deletedAt
      id
      isRequired
      title
      createdAt
    }
  }
`;

export const useTermUpdate = () => {
  return useMutation<Response, MutationUpdateTermArgs>(UPDATE_TERM);
};
