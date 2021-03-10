import gql from 'graphql-tag';

export const SEARCH_FOR_ISSUES = gql`
  query($searchQuery: String!, $endCursor: String) {
    search(query: $searchQuery, type: ISSUE, last: 20, after: $endCursor) {
      issueCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ... on Issue {
            state
            body
            labels(last: 100, after: null) {
              totalCount
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
            createdAt
            updatedAt
            title
            number
            author {
              login
              avatarUrl
            }
            comments(last: 100, after: null) {
              totalCount
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }
              edges {
                cursor
                node {
                  createdAt
                  body
                  author {
                    avatarUrl
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const FETCH_ALL_LABELS = gql`
  query($endCursor: String) {
    repository(name: "flutter", owner: "flutter") {
      labels(first: 100, after: $endCursor) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
        }
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;
