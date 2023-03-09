import { QueryTermsArgs, Terms } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";

type Response = {
  terms: Terms;
};

const FETCH_TERMS = gql`
  query ($params: TermsParams) {
    terms(params: $params) {
      metaData {
        totalPageCount
      }
      items {
        id
        title
        content
        isRequired
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`;

export const useTerms = (args: QueryTermsArgs) => {
  return useQuery<Response>(FETCH_TERMS, {
    variables: args,
  });
};
