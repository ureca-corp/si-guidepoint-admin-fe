import { GqlErrors } from "@/apps/global/infra/gql";
import { LoginResponse } from "@/gql/graphql";
import { ApolloError, gql, useLazyQuery } from "@apollo/client";

type Props = {
  onNotMatchedAccount: () => void;
};

type QueryResponse = {
  adminLogin: LoginResponse;
};

const REQUEST_LOGIN = gql`
  query ($email: String!, $password: String!) {
    adminLogin(loginInput: { email: $email, password: $password }) {
      user {
        userId
        email
        role
      }
      accessToken
    }
  }
`;

export const useRequestLogin = ({ onNotMatchedAccount }: Props) => {
  const [requestLogin, { data }] = useLazyQuery<QueryResponse>(REQUEST_LOGIN, {
    onError: (error: ApolloError) => {
      if (isNotMatchedAccount(error)) {
        onNotMatchedAccount();
      }
    },
  });

  return {
    requestLogin,
    data,
  };
};

const isNotMatchedAccount = (error: ApolloError) =>
  error.graphQLErrors[0].extensions.code === GqlErrors.Unauthorized;
