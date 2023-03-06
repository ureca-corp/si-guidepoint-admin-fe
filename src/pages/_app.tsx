import "../common/styles/globals.css";

import { PublicRoutes } from "@/apps/global/router";
import { Layout } from "@/apps/global/ui/layout";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { gqlClient } from "@/apps/global/infra/gql";
import { PrivateRoute } from "@/apps/auth/session";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isPublicPath = !!PublicRoutes.find((it) => it === router.pathname);

  return (
    <RecoilRoot>
      <ApolloProvider client={gqlClient}>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          {isPublicPath ? (
            <Component {...pageProps} />
          ) : (
            <PrivateRoute>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PrivateRoute>
          )}
        </ThemeProvider>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
