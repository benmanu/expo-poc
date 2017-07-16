import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { gql, graphql } from 'react-apollo';

function PostsList({ data }) {
  if (data.loading) {
    return (
      <View style={{ marginTop: 40 }}>
        <Text>Loading</Text>
      </View> 
    );
  } else {
    if (typeof data.error !== 'undefined') {
      return (
        <View style={{ marginTop: 40 }}>
          <Text>Error</Text>
        </View> 
      );
    } else {
      const list = data.readPosts.edges;
      return (
        <View style={{ marginTop: 40 }}>
          <List containerStyle={{marginBottom: 20}}>
            {
              list.map((item) => (
                <ListItem
                  key={item.node.ID}
                  title={item.node.Title}
                  leftIcon={{name: 'av-timer'}}
                />
              ))
            }
          </List> 
        </View> 
      );
    }
  }
}

const PostsQuery = gql`
  query {
    readPosts {
      edges {
        node {
          ID
          Title
          Content
        }
      }
    }
  }
`;

export default graphql(PostsQuery, {
  // skip: false,
  // skip: ownProps => {
    // console.log(ownProps.screenProps.signedIn);
    // return true;
  // },
})(PostsList);
