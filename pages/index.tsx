import React from 'react';
import { NextPage } from 'next';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import Layout from '../src/components/Layout';

type QueryResponse = {
  welcome: {
    name: string;
  };
};

const welcomeQuery = gql`
  query($name: String!) {
    welcome(name: $name) {
      name
    }
  }
`;

const welcomeQueryVars = {
  name: 'beautiful',
};

const Index: NextPage = () => {
  const [welcomeResult] = useQuery<QueryResponse>({
    query: welcomeQuery,
    variables: welcomeQueryVars,
  });

  if (welcomeResult.error) {
    return <div>{`Error loading welcome message: ${welcomeResult.error}`}</div>;
  } else if (welcomeResult.fetching || !welcomeResult.data) {
    return <div>Loading</div>;
  }

  const { welcome } = welcomeResult.data;

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-purple-900 flex items-center justify-center h-screen w-screen bg-gray-200">
        {`Hello ${welcome.name}!`}
      </h1>
    </Layout>
  );
};

export default Index;
