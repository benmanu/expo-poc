import { AsyncStorage } from 'react-native';
import base64 from 'base-64';
import { gql, graphql } from 'react-apollo';

import { networkInterface, client } from './network';

export const USER_KEY = 'auth-key';

export const setAuthorizationHeader = () => {
  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }

      // set the authentication token
      AsyncStorage.getItem(USER_KEY)
        .then(key => {
          req.options.headers.authorization = key ? `Basic ${key}` : null;
          next();
        })
        .catch(err => {
          next();
        });
    }
  }]);
};

export const onSignIn = (email, password) => {
  const key = base64.encode(`${email}:${password}`);

  return new Promise((resolve, reject) => {

    // fetch authenticate, then set the item/header
    fetch('http://expo.dev/home/authenticate', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${key}`,
      }
    })
      .then((response) => response.json())
      .then(res => {
        if (res.success) {
          AsyncStorage.setItem(USER_KEY, key)
            .then(res => {
              setAuthorizationHeader();
              resolve(res);
            })
            .catch(err => reject(err));
        } else {
          throw Error('Invalid user.');
        }
      })
      .catch(err => reject(err));

  });
};

export const onSignOut = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(USER_KEY)
      .then(client.resetStore)
      .then(res => {
        setAuthorizationHeader();
        resolve(res);
      })
      .catch(err => reject(err));
  });
};

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          setAuthorizationHeader();
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
