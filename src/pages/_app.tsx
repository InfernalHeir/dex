import React from "react";
import Layout from "../Layout";
import GlobalStyle from "../GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

const EllaApp = ({ Component, pageProps }) => {
  // now register the store
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default EllaApp;
