import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  FormLabel,
  FormInput
} from 'react-native-elements';

import { onSignIn, isSignedIn } from '../config/auth';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{ marginTop: 40 }}>
        <FormLabel containerStyle={styles.labelContainerStyle}>Email</FormLabel>
        <FormInput
          onChangeText={(email) => this.setState({ email })}
        />
        <FormLabel containerStyle={styles.labelContainerStyle}>Password</FormLabel>
        <FormInput
          onChangeText={(password) => this.setState({ password })}
        />
        <Button
          title='Login'
          onPress={() => {
            onSignIn(this.state.email, this.state.password) 
              .then(() => navigation.navigate('SignedIn'))
              .catch(err => alert(err.message));
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
