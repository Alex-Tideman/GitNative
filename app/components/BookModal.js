import React, { Component } from 'react'

import {
  Modal,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated,
  WebView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class BookModal extends Component{
  constructor (props) {
   super(props)
 }

  render() {
    debugger
    return(
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.visible} >
        <View style={styles.modalView} >
          {this.renderImage()}
          {this.renderRating()}
          {this.renderPageCount()}
          {this.renderMaturity()}
          {this.renderSnippet()}
          <TouchableHighlight onPress={this.props.closeModal} >
            <Icon name="times" style={styles.close} size={30} color="#2b2b2b" />
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }

  renderSnippet() {
    const {book} = this.props
    if(book.searchInfo && book.searchInfo.textSnippet) {
      return (
        <View style={styles.modalText}>
          <Text style={[styles.bookInfo]}>{JSON.stringify(book.searchInfo.textSnippet)}</Text>
        </View>
      )
    }
    return (null)
  }

  renderImage() {
    const {book} = this.props
    if(book.volumeInfo.imageLinks) {
      return (
        <Image style={styles.bookAvatar} source={{uri: book.volumeInfo.imageLinks[0]}} />
      )
    }
    return (null)
  }

  renderRating() {
    const {book} = this.props
    const stars = []

    if(book.volumeInfo.averageRating) {
      const score = Math.round(book.volumeInfo.averageRating) - 1
      for(var i = 0; i <= score; i++) {
        stars.push(<Icon key={i} name="star" size={30} color="#fbbc05" />)
      }
      for(var i = (score + 1); i < 5; i++) {
        stars.push(<Icon key={i} name="star" size={30} color="#e8eded" />)
      }
    } else {
      for(var i = 0; i <= 4; i++) {
        stars.push(<Icon key={i} name="star" size={30} color="#e8eded" />)
      }
    }
    return (
      <View style={styles.stars} >
        {stars}
      </View>
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

  renderMaturity() {
    const {book} = this.props
    if(book.volumeInfo.maturityRating === 'MATURE') {
      return (
        <View style={styles.mature}></View>
      )
    }
    return (null)
  }
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: Dimensions.get('window').height / 3,
    marginBottom: Dimensions.get('window').height / 3,
    padding: 10,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bookRating: {
    fontSize: 24,
    fontWeight: '300',
  },
  bookPageCount: {
    fontSize: 20,
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
  },
  close: {
    marginTop: 20,
    fontSize: 24,
  }
})
