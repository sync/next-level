import { GraphQLClient } from 'graphql-request';

export async function makeGraphRequest(operation, variables) {
  const opts = {};

  const client = new GraphQLClient('http://localhost:3000/graphql', opts);
  return client.request(operation, variables);
}

export const queries = {
  welcomeQuery: `
    query ($name: String!) {
      welcome(name: $name) {
        name
      }
    }
  `,
};
