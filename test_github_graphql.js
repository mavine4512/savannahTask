const github_data = {
  token: ' 5fd1713a2b58e2a02275ef9563827807ec233e33',
  username: 'mavine4512',
};

// import {fetch} from 'node-fetch';
const fetch = require('node-fetch');
const body = {
  query: `
   search(query: "repo:flutter/flutter", type: ISSUE, last: 20) {
    issueCount
    pageInfo {
      hasNextPage
    }
  }
  `,
};

const baseUrl = 'https://api.github.com/graphql';

const headers = {
  'Content-Type': 'application/json',
  authentication: 'bearer ' + github_data.token,
};

fetch(baseUrl, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(body),
})
  .then((response) => {
    console.log(JSON.stringify(response));
  })
  .catch((err) => console.log(JSON.stringify(err)));
