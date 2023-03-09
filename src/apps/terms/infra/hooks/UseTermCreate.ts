import { MutationCreateTermArgs, Term } from "@/gql/graphql";
import { gql, useMutation } from "@apollo/client";

type Response = {
  createTerm: Term;
};

const CREATE_TERM = gql`
  mutation CreateTerm($createTermInput: CreateTermInput!) {
    createTerm(createTermInput: $createTermInput) {
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

export const useTermCreate = () => {
  return useMutation<Response, MutationCreateTermArgs>(CREATE_TERM);
};
