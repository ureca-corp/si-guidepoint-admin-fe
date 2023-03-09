import { QueryTermArgs, Term } from "@/gql/graphql";
import { gql, useLazyQuery } from "@apollo/client";

type Response = {
  term: Term;
};

const FETCH_TERM = gql`
  query Term($id: Int!) {
    term(id: $id) {
      id
      title
      content
      isRequired
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const useTerm = () => {
  return useLazyQuery<Response, QueryTermArgs>(FETCH_TERM);
};
