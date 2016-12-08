import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated
} from 'react-native'

export default class Row extends Component{
  constructor (props) {
   super(props)
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
        <Text style={[styles.bookInfo, styles.bookTitle]}>Title: {book.volumeInfo.title}</Text>
        <Text style={[styles.bookInfo, styles.bookAuthor]}>Author: {authors}</Text>
        <Text style={[styles.bookInfo, styles.bookRating]}>Average Rating: {book.volumeInfo.averageRating}</Text>
        <Text style={[styles.bookInfo, styles.bookPageCount]}># of Pages: {book.volumeInfo.pageCount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookRow: {
    flex: 1,
    padding: 10,
    margin: 5,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },
  bookInfo: {
    fontSize: 20,
  },
  bookAvatar: {
    flex: 3,
    height: 30,
    width: 30,
    borderRadius: 50
  }
})
