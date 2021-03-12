import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer adea2dd449d9f86a4207f6d46d6e7eb4efa229f6`,
  },
});
export default Client;
