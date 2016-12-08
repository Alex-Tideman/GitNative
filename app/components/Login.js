import React, { Component } from 'react';
import Dimensions from 'Dimensions'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import Auth0Lock from 'react-native-lock';
var credentials = require('../../auth0-credentials');
var lock = new Auth0Lock(credentials);

export default class Login extends Component{
  constructor (props) {
   super(props)
 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>googbrarian</Text>
          <Image
            style={styles.badge}
            source={require('../src/img/google-books.png')} />
        </View>
        <TouchableHighlight
          style={styles.signInButton}
          underlayColor='#949494'
          onPress={this._onLogin.bind(this)}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onLogin() {
    lock.show({
      }, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
        }
        this.props.navigator.push({
          name: 'Profile',
          passProps: {
            profile: profile,
            token: token
          }
        })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 60,
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    marginRight: 30,
    height: Dimensions.get('window').width,
    resizeMode: Image.resizeMode.contain,
  },
  title: {
    fontSize: 48,
    fontWeight: '100',
    color: '#2b2b2b',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
