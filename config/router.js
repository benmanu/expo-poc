import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';

export const SignedOut = TabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='face'
          color={tintColor}
        />
      ),
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      tabBarLabel: 'Register',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='gavel'
          color={tintColor}
        />
      ),
    },
  },
});

export const SignedIn = TabNavigator({
  Posts: {
    screen: Posts,
    navigationOptions: {
      tabBarLabel: 'Posts',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='view-list'
          color={tintColor}
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='face'
          color={tintColor}
        />
      ),
    },
  },
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    }
  );
};