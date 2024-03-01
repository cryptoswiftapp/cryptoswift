import "@/styles/globals.css";

import Head from "next/head";

import { ChakraProvider, extendTheme, CSSReset, Box } from "@chakra-ui/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundImage: "url('./background1.png')",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      "#__next": {
        height: "100%",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Head>
        <title>CryptoSwift</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <Box minH="100vh">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
