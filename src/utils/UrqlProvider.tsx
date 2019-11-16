import React from 'react';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Provider as ActualProvider,
  Client,
} from 'urql';

type Props = {
  urqlClient?: Client;
};

const UrqlProvider: React.FC<Props> = ({
  urqlClient = createClient({
    url: 'http://localhost:666/api/graphql',
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
  }),
  children,
}) => {
  return <ActualProvider value={urqlClient}>{children}</ActualProvider>;
};

export default UrqlProvider;
