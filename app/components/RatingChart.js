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

export default class RatingChart extends Component{
  constructor (props) {
   super(props)
 }

 render() {
   const {books} = this.props

   return (
     <View style={styles.bookChart}>
     {this.props.books.sort(function(a,b) {
       let aScore = a.volumeInfo.averageRating ? a.volumeInfo.averageRating : 0
       let bScore = b.volumeInfo.averageRating ? b.volumeInfo.averageRating : 0
       return bScore - aScore
     }).map(function(book, i) {
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
       return (
         <View style={styles.bookChart} key={i}>
          <View style={[{height: score,backgroundColor:scoreColor}, styles.bar, styles.barRating]} />
         </View>
       )}
     )}
     </View>
   )
 }
}

const styles = StyleSheet.create({
  bookChart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 1,
  },
  bar: {
    width: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 2,
  },
  barRating: {
  }
});
