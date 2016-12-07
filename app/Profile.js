import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import ProfileList from './ProfileList'

var API_ENDPOINT = 'http://localhost:3001/secured/ping';

export default class ProfileView extends Component{
  componentWillMount() {
    // debugger
    // console.error(this.props.profile)
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileList profile={this.props.profile}/>
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

const styles = StyleSheet.create({
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
