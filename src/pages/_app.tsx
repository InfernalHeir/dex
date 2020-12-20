import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Layout from "../Layout";
import GlobalStyle from "../GlobalStyle";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { composeWithDevTools } from "redux-devtools-extension";
import reducres from "../redux/reducers";
import ReduxThunk from "redux-thunk";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import withRedux from "next-redux-wrapper";
import fetch from "isomorphic-unfetch";
import { AppContext } from "next/app";

// now register the store

const store = createStore(
  reducres,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
    // other store enhancers if any
  )
);

const EllaApp = ({ Component, pageProps }) => {

  const getLibrary = (provider, connector) => {
    const web3 = new Web3(provider);
    return web3;
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
    </Web3ReactProvider>
  );
};


export default EllaApp;
