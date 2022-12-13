import "../styles/globals.css";
import type { AppProps } from "next/app";
import Breadcrumbs from "../components/Breadcrumbs";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="titla, meta, nextjs" />
          <meta name="author" content="Syamlal CM" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Breadcrumbs />
        <Hydrate state={dehydrate}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>

      {/**
       * TODO: powrót do poprzedniej strony jeśli nie jesteśmy aktualnie na stronie głównej
       */}
      {router.pathname !== "/" && (
        <button onClick={() => router.back()}>Back</button>
      )}
      {/* <Link href="/">Powrót</Link> */}
    </>
  );
}

export default MyApp;
