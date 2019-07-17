import '../src/css/tailwind.css';
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider, Client } from 'urql';
import withUrqlClient from '../src/helpers/withUrqlClient';

interface Props extends App {
  urqlClient: Client;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, urqlClient } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>Next Level</title>
        </Head>
        <Provider value={urqlClient}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withUrqlClient(MyApp);
