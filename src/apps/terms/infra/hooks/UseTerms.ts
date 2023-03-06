import { Terms, TermsParams } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";

type QueryResponse = {
  terms: Terms;
};

const FETCH_TERMS = gql`
  query ($params: TermsParams) {
    terms(params: $params) {
      metaData {
        totalItemCount
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

export const useTerms = (params: TermsParams) => {
  return useQuery<QueryResponse>(FETCH_TERMS, {
    variables: { params },
  });
};
