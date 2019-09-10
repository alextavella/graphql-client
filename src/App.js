import React from 'react';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';

// import client from './graphql';
// import Todo from './pages/Todo';

import client from './services/api';
import Book from './pages/Book';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Apollo Application <span role="img" aria-label="foguete">🚀</span></h2>
        <Book />
        {/* <Todo /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
