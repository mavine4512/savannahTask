import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer a717932c580a9f70ecad8a676df860a20e786d0b`,
  },
});
export default Client;
