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
        <Text>Title: {book.volumeInfo.title}</Text>
        <Text>Author: {authors}</Text>
        <Text>Average Rating: {book.volumeInfo.averageRating}</Text>
        <Text># of Pages: {book.volumeInfo.pageCount}</Text>
        <Image
          style={styles.bookAvatar}
          source={{uri: book.volumeInfo.imageLinks.smallThumbnail}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookRow: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  bookAvatar: {
    flex: 3,
    height: 30,
    width: 30,
    borderRadius: 50
  }
})