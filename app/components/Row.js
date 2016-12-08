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
    let score = book.volumeInfo.averageRating ? book.volumeInfo.averageRating * 12 : 2
    if(score >= 50) {
      scoreColor = '#1E77E2'
    }
    if(score > 40 && score < 50) {
      scoreColor = '#6A5'
    }
    if(score > 30 && score < 40) {
      scoreColor = '#FED024'
    }
    if(score > 20 && score < 30) {
      scoreColor = '#FA5732'
    }
    if(score < 20) {
      scoreColor = '#C21515'
    }

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
    if(book.volumeInfo.averageRating) {
      rating = book.volumeInfo.averageRating
    } else {
      rating = "N/A"
    }
    return (
      <View style={styles.bookRow}>
        <Text style={[styles.bookInfo, styles.bookTitle]}>{book.volumeInfo.title}</Text>
        <Text style={[styles.bookInfo, styles.bookAuthor]}>Author: {authors}</Text>
        <Text style={[styles.bookInfo, styles.bookRating]}>Average rating of {rating}</Text>
        <Text style={[styles.bookInfo, styles.bookPageCount]}>{book.volumeInfo.pageCount} pages</Text>
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
  bookRating: {
    fontSize: 16,
    fontWeight: '100',
  },
  bookPageCount: {
    fontSize: 16,
    fontWeight: '100',
  },

  bookAvatar: {
    flex: 3,
    height: 30,
    width: 30,
    borderRadius: 50
  }
})
