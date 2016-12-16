import React, { Component } from 'react'

import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated,
  WebView,
  Dimensions
} from 'react-native'

import BookModal from './BookModal'

export default class Row extends Component{
  constructor (props) {
   super(props)
   this.state = {
     showModal: false
   }
 }

  render() {
    const { book } = this.props
    if(book.size < 1) {
      return (
        <View>
          <Text>No books</Text>
        </View>
      )
    }
    let authors = "None provided"
    if(book.volumeInfo.authors && book.volumeInfo.authors.length > 0) {
      authors = book.volumeInfo.authors.join(', ')
    }
    return (
      <View style={styles.bookRow}>
        <Text style={[styles.bookInfo, styles.bookTitle]}>{book.volumeInfo.title}</Text>
        <Text style={[styles.bookInfo, styles.bookAuthor]}>Author(s): {authors}</Text>
        <TouchableHighlight onPress={() => {this.setState({ showModal: true})}} >
          <Text style={styles.getInfo}>Read More...</Text>
        </TouchableHighlight>
        <BookModal style={styles.modal}
                   visible={this.state.showModal}
                   book={book}
                   closeModal={() => {this.setState({ showModal: false})}} />
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  bookRow: {
    flex: 1,
    padding: 10,
    margin: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  bookAuthor: {
    fontSize: 16,
    fontWeight: '100',
  },
  getInfo: {
    fontSize: 14,
    borderRadius: 50,
    padding: 5,
    backgroundColor: '#6A5',
    marginTop: 5,
    padding: 3,
    width: 120,
    textAlign: 'center',
  }
})
