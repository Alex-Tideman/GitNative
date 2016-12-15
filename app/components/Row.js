import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated,
  WebView
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
    return (
      <View style={styles.bookRow}>
        {this.renderPreview()}
        <Text style={[styles.bookInfo, styles.bookTitle]}>{book.volumeInfo.title}</Text>
        {this.renderImage()}
        <Text style={[styles.bookInfo, styles.bookAuthor]}>Author(s): {authors}</Text>
        {this.renderRating()}
        {this.renderPageCount()}
        {this.renderSnippet()}
        {this.renderMaturity()}
      </View>
    );
  }

  renderImage() {
    const {book} = this.props
    if(book.imageLinks) {
      return (
        <Image style={styles.bookAvatar} source={{uri: book.volumeInfo.imageLinks[0]}} />
      )
    }
    return (null)
  }

  renderRating() {
    const {book} = this.props
    let rating
    if(book.volumeInfo.averageRating) {
      rating = `${book.volumeInfo.averageRating} / 5`
    } else {
      rating = "N/A"
    }
    return (
      <Text style={[styles.bookInfo, styles.bookRating]}>{rating}</Text>
    )
  }

  renderPageCount() {
    const {book} = this.props
    if(book.volumeInfo.pageCount) {
      return (
        <Text style={[styles.bookInfo, styles.bookPageCount]}>{book.volumeInfo.pageCount} pages</Text>
      )
    }
    return (null)
  }

  renderSnippet() {
    const {book} = this.props
    if(book.searchInfo && book.searchInfo.textSnippet) {
      return (
        <Text style={[styles.bookInfo, styles.bookPageCount]}>{book.searchInfo.textSnippet}</Text>
      )
    }
    return (null)
  }

  renderMaturity() {
    const {book} = this.props
    if(book.volumeInfo.maturityRating === 'MATURE') {
      return (
        <View style={styles.mature}></View>
      )
    }
    return (null)
  }

  renderPreview() {
    const {book} = this.props
    if(book.volumeInfo.previewLink) {
      return (
        <WebView
          style={{
            backgroundColor: '#2b2b2b',
            height: 200,
          }}
          source={{uri: `${book.volumeInfo.previewLink}`}}
          scalesPageToFit={true}
        />
      )
    }
    return (null)
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
    height: 30,
    width: 30,
  },
  mature: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'red',
  }
})
