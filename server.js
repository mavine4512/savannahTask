const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const MyGraphQLSchema = require('schema.docs.graphql');
const github_data = {
  token: ' 5fd1713a2b58e2a02275ef9563827807ec233e33',
  username: 'mavine4512',
};

const baseUrl = 'https://api.github.com/graphql';
const headers = {
  'Content-Type': 'application/json',
  authentication: 'bearer ' + github_data.token,
};

const fetch = require('node-fetch');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const app = express();

// http://localhost:5000/graphql?
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'HelloWorld',
//     fields: () => ({
//       message: {type: GraphQLString, resolve: () => 'hello World'},
//     }),
//   }),
// });
const authors = [
  {id: 1, name: 'K. K.Tom'},
  {id: 2, name: 'Mavine Naaman'},
  {id: 3, name: 'Boaz Ken'},
  {id: 4, name: 'Faith Joy'},
];

const books = [
  {id: 1, name: 'Harry Potter and the chamber of Secrets', authorId: 1},
  {id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1},
  {id: 3, name: 'Harry Potter and the Goblet of fire', authorId: 2},
  {id: 4, name: 'The Followship of the Ring', authorId: 2},
  {id: 5, name: 'Harry Potter and the chamber of Secrets', authorId: 2},
  {id: 6, name: 'The Two Towers', authorId: 3},
  {id: 7, name: 'the Return of the King', authorId: 4},
  {id: 8, name: 'The way to mans heart', authorId: 3},
  {id: 9, name: 'Beyond the Shadows', authorId: 3},
];

// const body = {
//   query: `
//    search(query: "repo:flutter/flutter", type: ISSUE, last: 20) {
//     issueCount
//     pageInfo {
//       hasNextPage
//     }
//   }
//   `,
// };

fetch(baseUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(books),
})
  .then((response) => {
    console.log(JSON.stringify(response));
  })
  .catch((err) => console.log(JSON.stringify(err)));

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    authorId: {type: GraphQLNonNull(GraphQLInt)},
    author: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find((author) => author.id === book.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author of a book',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type: GraphQLNonNull(GraphQLString)},
    books: {
      type: new GraphQLList(BookType),
      resolve: (auther) => {
        return books.filter((book) => book.authorId === auther.id);
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A single Book',
      args: {
        id: {type: GraphQLInt},
      },
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'list of All Books',
      resolve: () => books,
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'list of All Authors',
      resolve: () => authors,
    },
    author: {
      type: AuthorType,
      description: 'A single Author',
      args: {
        id: {type: GraphQLInt},
      },
      resolve: (parent, args) =>
        authors.find((author) => author.id === args.id),
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
        authorId: {type: GraphQLNonNull(GraphQLInt)},
      },
      resolve: (parent, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId,
        };
        books.push(book);
        return book;
      },
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add an author',
      args: {
        name: {type: GraphQLNonNull(GraphQLString)},
      },
      resolve: (parent, args) => {
        const author = {
          id: authors.length + 1,
          name: args.name,
        };
        authors.push(author);
        return author;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    // schema: MyGraphQLSchema,
    graphiql: true,
  }),
);
app.listen(5000, () => console.log('Server Running'));
