import App, { Container, AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>Next.js Template</title>
        </Head>

        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
