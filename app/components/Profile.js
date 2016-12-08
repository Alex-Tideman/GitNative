import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Animated
} from 'react-native'

import Row from './Row'

export default class Profile extends Component{
  constructor (props) {
   super(props)
   this.state = {
     text: ''
   }
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
        <View style={styles.bookChart}>
          <View style={[styles.bar, styles.barPast]} />
          <View style={[styles.bar, styles.barFuture]} />
        </View>
        <ScrollView
          style={styles.scrollView}>
          {this.props.books.map(function(book, i) {
            return <Row key={i} book={book} />}
          )}
        </ScrollView>
      </View>
    );
  }

  _onCallApi() {
    let API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${this.state.text}`;
    const { books, getBooks } = this.props
    fetch(API_ENDPOINT, {
        method: "GET",
        // headers: {
        //   'Authorization': 'Bearer ' + this.props.token.idToken
        // }
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        getBooks(responseJSON.items)
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
  bookChart: {
    top: 110,
    height: 50,
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
  },
  bar: {
    width: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  barPast: {
    backgroundColor: 'gray',
  },
  barFuture: {
    backgroundColor: '#bbccddff',
    marginLeft: 10,
  },
  scrollView: {
    top: 160,
    backgroundColor: '#D9DADF',
    height: 400
  },
});
