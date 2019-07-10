import { ApolloServer, gql } from 'apollo-server';

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

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
