import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

var API_ENDPOINT = 'http://localhost:3001/secured/ping';

export default class ProfileView extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.profile.picture}}
          />
          <Text style={styles.title}>Welcome {this.props.profile.name}</Text>
        </View>
        <TouchableHighlight
          style={styles.callApiButton}
          underlayColor='#949494'
          onPress={this._onCallApi}>
          <Text>Call API</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onCallApi() {
    fetch(API_ENDPOINT, {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + this.props.token.idToken
        }
      })
      .then((response) => response.text())
      .then((responseText) => {
        Alert.alert(
          'Request Successful',
          'We got the secured data successfully',
          [
            {text: 'OK'},
          ]
        )
      })
      .catch((error) => {
        Alert.alert(
          'Request Failed',
          'Please download the API seed so that you can call it',
          [
            {text: 'OK'},
          ]
        )
      });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  messageBox: {
    flex: 1,
    marginTop: 100,
  },
  badge: {
    alignSelf: 'center',
    height: 110,
    width: 102,
    marginBottom: 80,
  },
  avatar: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: '#2b2b2b',
  },
  callApiButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
