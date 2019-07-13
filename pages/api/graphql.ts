import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    welcome(name: String!): Welcome
  }

  type Welcome {
    name: String!
  }
`;

const resolvers = {
  Query: {
    welcome: (_: any, { name }, _context: any) => ({
      name,
    }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
