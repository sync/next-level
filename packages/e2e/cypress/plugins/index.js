const ora = require('ora');
const Promise = require('bluebird');
const { GraphQLClient } = require('graphql-request');

const queries = {
  welcomeQuery: `
    query ($name: String!) {
      welcome(name: $name) {
        name
      }
    }
  `,
};

const makeGraphRequest = (apiUrl, operation, variables, user) => {
  const opts = {};

  if (user && user.JWT) {
    opts.headers = {
      Authorization: `Bearer ${user.JWT}`,
    };
  }

  const client = new GraphQLClient(apiUrl, opts);
  return client.request(operation, variables);
};

const apiUrl = 'http://localhost:3000/api/graphql';

const getWelcomeAsync = name => {
  return new Promise((resolve, reject) => {
    return makeGraphRequest(apiUrl, queries.welcomeQuery, {
      name,
    })
      .then(({ welcome }) => {
        if (welcome) {
          resolve(welcome);
        } else {
          reject(new Error('Could not load welcome message'));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = (on, config) => {
  on('task', {
    getWelcome(name) {
      const spinner = ora('Looking for welcome message').start();
      return getWelcomeAsync(name)
        .tap(() => {
          spinner.succeed('Found welcome message');
        })
        .tapCatch(err => {
          spinner.fail(err.message);
        });
    },
  });
};
