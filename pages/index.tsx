import React from 'react';
import { NextPage } from 'next';
import { useGraphQL } from 'graphql-react';
import Layout from '../src/components/Layout';

type Props = {
  baseUrl: string;
};

type Response = {
  data?: {
    welcome: {
      name: string;
    };
  };
};

const Index: NextPage<Props> = ({ baseUrl }) => {
  const { cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = baseUrl;
    },
    operation: {
      query: /* GraphQL */ `
        query($name: String!) {
          welcome(name: $name) {
            name
          }
        }
      `,
      variables: {
        name: 'beautiful',
      },
    },
  });

  const { data }: Response = cacheValue;

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-purple-900 flex items-center justify-center h-screen w-screen bg-gray-200">
        {`Hello ${data && data.welcome.name}!`}
      </h1>
    </Layout>
  );
};

Index.getInitialProps = async ({ req }) => {
  function getBaseUrl(req) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return `${protocol}://${host}/graphql`;
  }

  const baseUrl = req ? getBaseUrl(req) : '/graphql';

  return {
    baseUrl,
  };
};

export default Index;
