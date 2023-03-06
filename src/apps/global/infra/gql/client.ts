import { ApolloClient, InMemoryCache } from "@apollo/client";

export const gqlClient = new ApolloClient({
  uri: "https://guidepoint-api.ureca.im/graphql",
  cache: new InMemoryCache(),
});
