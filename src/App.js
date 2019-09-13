import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';

import client from './services/api';
import Routes from './routes';

import LazyImport from './components/LazyImport';

const Nav = LazyImport({
  loader: () => import('./components/Nav' /* webpackChunkName: 'nav' */),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav />
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
