import React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-fetch';
import Layout from '../src/components/Layout';

type Props = {
  welcome: {
    name: string;
  };
};

const Index: NextPage<Props> = ({ welcome }) => (
  <Layout>
    <h1 className="text-5xl font-bold text-purple-900 flex items-center justify-center h-screen w-screen bg-gray-200">
      {`Hello ${welcome.name}!`}
    </h1>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  function getBaseUrl(req) {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    return `${protocol}://${host}/api`;
  }

  const baseUrl = req ? getBaseUrl(req) : '/api';
  const welcome = await fetch(`${baseUrl}/welcome`).then(r => r.json());

  return {
    welcome,
  };
};

export default Index;
