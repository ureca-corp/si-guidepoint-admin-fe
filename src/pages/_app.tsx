import "../common/styles/globals.css";

import { PublicRoutes } from "@/apps/global/router";
import { Layout } from "@/apps/global/ui/layout";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isPublicPath = !!PublicRoutes.find((it) => it === router.pathname);

  return (
    <RecoilRoot>
      <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
        {isPublicPath ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
