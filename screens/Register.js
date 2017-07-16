import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button,
  FormLabel,
  FormInput
} from 'react-native-elements';

export default class Register extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <FormLabel containerStyle={styles.labelContainerStyle}>Email</FormLabel>
        <FormInput />
        <FormLabel containerStyle={styles.labelContainerStyle}>Password</FormLabel>
        <FormInput />
        <Button title='Register' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelContainerStyle: {
    marginTop: 8,
  },
});
