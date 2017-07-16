import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PostsList from '../components/PostsList';

export default class Posts extends React.Component {
  render() {
    return (
      <PostsList {...this.props} />
    );
  }
}
