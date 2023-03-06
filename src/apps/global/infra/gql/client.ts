import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({ uri: process.env.gqlServer });

const errorLink: ApolloLink = onError((e) => {
  console.error(e);
});

export const gqlClient = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: from([errorLink, httpLink]),
});
