import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
  Client,
} from 'urql';
import fetch from 'isomorphic-fetch';

// Polyfill fetch() on the server
if (typeof window === 'undefined') {
  global.fetch = fetch;
}

let urqlClient: Client | null = null;
let ssrCache: any = null;

export default function initUrqlClient(baseUrl: string, initialState = {}) {
  // Create a new client for every server-side rendered request to reset its state
  // for each rendered page
  // Reuse the client on the client-side however
  const isServer = typeof window === 'undefined';
  if (isServer || !urqlClient) {
    ssrCache = ssrExchange({ initialState });

    urqlClient = createClient({
      url: `${baseUrl}/api/graphql`,
      // Active suspense mode on the server-side
      suspense: isServer,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
    });
  }

  // Return both the cache and the client
  return [urqlClient, ssrCache];
}
