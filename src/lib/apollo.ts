import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4txwxf80e2g01uk51hb1swv/master',
  cache: new InMemoryCache(),
});
