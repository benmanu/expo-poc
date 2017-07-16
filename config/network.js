import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

// setup the network interface
export const networkInterface = createNetworkInterface({
  uri: 'http://expo.dev/graphql/',
});

export const client = new ApolloClient({
  networkInterface,
});
