import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import { onSignOut } from '../config/auth';

export default class Profile extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>JD</Text>
        <Button
          title='Logout'
          onPress={() => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'SignedOut'})
              ]
            });
            navigation.dispatch(resetAction);
            onSignOut()
              .catch(err => {
                // console.log('<>', err);
                // alert(err.message);
              });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelContainerStyle: {
    marginTop: 8,
  },
});
