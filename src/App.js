import React from 'react';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';

// import client from './graphql';
// import Todo from './pages/Todo';

import client from './services/api';
import Product from './pages/Product';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Apollo Application <span role="img" aria-label="foguete">🚀</span></h2>
        <Product />
        {/* <Todo /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
