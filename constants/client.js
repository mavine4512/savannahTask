import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer 52e00c20945848602f98888a6e40f10c9598fe77`,
  },
});
export default Client;
