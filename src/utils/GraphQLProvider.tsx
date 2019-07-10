import React from 'react';
import {
  // @ts-ignore
  GraphQLProvider as ActualGraphQLProvider,
  GraphQL,
} from 'graphql-react';

type Props = {
  graphql?: GraphQL;
};

const ApolloProvider: React.FC<Props> = ({
  graphql = new GraphQL(),
  children,
}) => {
  return (
    <ActualGraphQLProvider graphql={graphql}>{children}</ActualGraphQLProvider>
  );
};

export default ApolloProvider;
