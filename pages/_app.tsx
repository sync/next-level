import '../src/css/tailwind.css';
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
// @ts-ignore
import { GraphQLProvider, GraphQL } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import fetch from 'isomorphic-fetch';

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  // @ts-ignore
  global.fetch = fetch;
}

interface Props extends App {
  graphql: GraphQL;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, graphql } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>Next Level</title>
        </Head>
        <GraphQLProvider graphql={graphql}>
          <Component {...pageProps} />
        </GraphQLProvider>
      </Container>
    );
  }
}

export default withGraphQLApp(MyApp);
