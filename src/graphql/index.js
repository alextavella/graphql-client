import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/ck0ct5v924lwt0163defax29j',
  cache: new InMemoryCache()
});

export default client;