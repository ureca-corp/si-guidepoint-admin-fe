import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { SessionKey } from "@/apps/auth/session";

const httpLink = new HttpLink({ uri: process.env.gqlServer });

const authLink = setContext(() => {
  const userJson: any = sessionStorage.getItem(SessionKey.User);
  const user = JSON.parse(userJson);
  const accessToken = user.user.accessToken;

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

const errorLink: ApolloLink = onError((e) => {
  console.error(e);
});

export const gqlClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: from([errorLink, authLink, httpLink]),
});
