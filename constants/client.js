import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    // Authorization: `bearer 283a4ada76abeffd3a7c9a35ea80d79472ec9a3f`,
    Authorization: `bearer 6133074ab6be219e952d503033308de83954ea4e`,
  },
});
export default Client;
