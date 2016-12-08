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
  Switch,
  Animated
} from 'react-native'

import Row from './Row'

export default class Profile extends Component{
  constructor (props) {
   super(props)
   this.state = {
     searchTerm: null,
     subject: null,
     freeEbook: false,
     orderByNewest: false
   }
 }

  render() {
    return (
      <View style={styles.profile} >
        <TextInput
          style={styles.form}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({searchTerm: text})}
          value={this.state.searchTerm} />
        <TextInput
          style={styles.form}
          autoCapitalize={'none'}
          onChangeText={(text) => this.setState({subject: text})}
          value={this.state.subject} />
        <Switch
          onValueChange={(value) => this.setState({freeEbook: value})}
          style={styles.ebook}
          onTintColor="#74B135"
          thumbTintColor="#1E77E2"
          tintColor="#2b2b2b"
          value={this.state.freeEbook} />
        <Switch
          onValueChange={(value) => this.setState({orderByNewest: value})}
          style={styles.orderByNewest}
          onTintColor="#74B135"
          thumbTintColor="#1E77E2"
          tintColor="#2b2b2b"
          value={this.state.orderByNewest} />
        <Text style={styles.eBookLabel}>Free E-Book</Text>
        <Text style={styles.newestLabel}>Newest</Text>
        <TouchableHighlight
          style={styles.callApiButton}
          underlayColor='#949494'
          disabled={!this.state.searchTerm && !this.state.subject}
          onPress={this._onCallApi.bind(this)}>
          <Text>Get Books</Text>
        </TouchableHighlight>
        <View style={styles.bookChart}>
        {this.props.books.sort(function(a,b) {
          let aScore = a.volumeInfo.averageRating ? a.volumeInfo.averageRating : 0
          let bScore = b.volumeInfo.averageRating ? b.volumeInfo.averageRating : 0
          return bScore - aScore
        }).map(function(book, i) {
          let score = book.volumeInfo.averageRating ? book.volumeInfo.averageRating * 12 : 2
          return <View key={i} style={[{height: score,backgroundColor:'#1E77E2'}, styles.bar, styles.barPast]} />}
        )}
        </View>
        <ScrollView
          style={styles.scrollView}>
          {this.props.books.map(function(book, i) {
            return <Row key={i} book={book} />}
          )}
        </ScrollView>
      </View>
    )
  }

  _onCallApi() {
    let { books, getBooks} = this.props
    let {freeEbook, orderByNewest, searchTerm, subject} = this.state
    let searchTerms

    if(subject) {
      searchTerms = `${searchTerm}+subject:${subject}`
    } else {
      searchTerms = `${searchTerm}`
    }

    let API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&maxResults=20`
    if(freeEbook) {
      API_ENDPOINT = API_ENDPOINT + '&filter=free-ebooks'
    }
    if(orderByNewest) {
      API_ENDPOINT = API_ENDPOINT + '&orderBy=newest'
    }
    fetch(API_ENDPOINT, {
        method: "GET"
        // headers: {
        //   'Authorization': 'Bearer ' + this.props.token.idToken
        // }
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        getBooks(responseJSON.items)
        Alert.alert(
          'Request Successful',
          `We found ${responseJSON.totalItems} books on ${this.state.searchTerm}`,
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
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  ebook: {
    top: 95,
    left: 15,
    marginBottom: 10,
  },
  orderByNewest: {
    top: 55,
    left: 150,
    marginBottom: 10,
  },
  eBookLabel: {
    top: 50,
    left: 15,
    marginBottom: 10,
    fontSize: 12,
  },
  newestLabel: {
    top: 25,
    left: 150,
    marginBottom: 10,
    fontSize: 12,
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
    marginLeft: 2,
  },
  scrollView: {
    top: 160,
    backgroundColor: '#D9DADF',
    height: 400
  },
});
