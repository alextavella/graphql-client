import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "./services/api";
import Routes from "./routes";

import { ProductProvider } from "./store/product";
import LazyImport from "./components/LazyImport";

const Nav = LazyImport({
  loader: () => import("./components/Nav" /* webpackChunkName: 'nav' */)
});

function App() {
  return (
    <ProductProvider>
      <ApolloProvider client={client}>
        <>
          <Nav />
          <Routes />
        </>
      </ApolloProvider>
    </ProductProvider>
  );
}

export default App;
