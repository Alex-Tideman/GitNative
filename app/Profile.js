import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated
} from 'react-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default class ProfileView extends Component{
  constructor () {
   super()
   this.state = {
     text: '',
     items: []
   }
 }

  componentWillMount() {
    // debugger
    // console.error(this.props.profile)
  }

  render() {
    return (
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: this.props.profile.picture}}
        />
        <TextInput
          style={styles.form}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight
          style={styles.callApiButton}
          underlayColor='#949494'
          onPress={this._onCallApi.bind(this)}>
          <Text>Get Data</Text>
        </TouchableHighlight>
        <Text>{this.state.items}</Text>
      </View>
    );
  }

  _onCallApi() {
    let API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${this.state.text}`;

    fetch(API_ENDPOINT, {
        method: "GET",
        // headers: {
        //   'Authorization': 'Bearer ' + this.props.token.idToken
        // }
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        debugger
        Alert.alert(
          'Request Successful',
          `We found ${responseJSON.totalItems} books on ${this.state.text}`,
          [
            {text: 'OK'},
          ]
        )
      })
      .catch((error) => {
        Alert.alert(
          'Request Failed',
          'Please try a different search',
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
  avatar: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    top: 80,
  },
  form: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    top: 85,
    padding: 5,
  },
  callApiButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    top: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graph: {
    margin: 10,
    borderRadius: 5,
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
