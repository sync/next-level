import React from 'react';
import { NextPage } from 'next';
import Layout from '../src/components/Layout';

const Page: NextPage = () => (
  <Layout>
    <h1 className="text-5xl font-bold text-purple-900 flex items-center justify-center h-screen w-screen bg-gray-200">
      Hello world!
    </h1>
  </Layout>
);

export default Page;
