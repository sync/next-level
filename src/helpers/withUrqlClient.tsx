import React from 'react';
import ssrPrepass from 'react-ssr-prepass';
import { Client } from 'urql';
import { AppContext } from 'next/app';
import initUrqlClient from './initUrqlClient';

export interface Props {
  urqlClient: Client;
  urqlState: any;
  baseUrl: string;
}

const withUrqlClient = (App: any) => {
  return class WithUrql extends React.Component {
    static async getInitialProps(appCtx: AppContext) {
      const {
        Component,
        router,
        ctx: { req },
      } = appCtx;

      // Run the wrapped component's getInitialProps function
      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appCtx);
      }

      // getInitialProps is universal, but we only want
      // to run server-side rendered suspense on the server
      const isBrowser = typeof window !== 'undefined';
      if (isBrowser) {
        return appProps;
      }

      function getBaseUrl(req) {
        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers['x-forwarded-host'] || req.headers.host;
        return `${protocol}://${host}`;
      }

      const baseUrl = req ? getBaseUrl(req) : '';

      const [urqlClient, ssrCache] = initUrqlClient(baseUrl);

      // Run suspense and hence all urql queries
      await ssrPrepass(
        <App
          {...appProps}
          Component={Component}
          router={router}
          urqlClient={urqlClient}
        />,
      );

      // Extract query data from the Apollo store
      // Extract the SSR query data from urql's SSR cache
      const urqlState = ssrCache.extractData();

      return {
        ...appProps,
        baseUrl,
        urqlState,
      };
    }

    urqlClient: Client | null;

    constructor(props: Props) {
      super(props);

      if (props.urqlClient) {
        this.urqlClient = props.urqlClient;
      } else {
        // Create the urql client and rehydrate the prefetched data
        const [urqlClient] = initUrqlClient(props.baseUrl, props.urqlState);
        this.urqlClient = urqlClient;
      }
    }

    render() {
      return <App {...this.props} urqlClient={this.urqlClient} />;
    }
  };
};

export default withUrqlClient;
