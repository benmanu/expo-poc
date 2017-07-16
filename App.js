import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './config/network';
import { createRootNavigator } from './config/router';
import { isSignedIn } from "./config/auth";

export default class App extends React.Component {
  constructor(...args) {
    super(...args);

    // set the default state
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    // check if the user is already signedin
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert('An error occurred'));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <ApolloProvider client={client}>
        <Layout screenProps={{ signedIn }} />
      </ApolloProvider>
    );
  }
}
