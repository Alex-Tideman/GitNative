import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from 'react-native'

export default class RatingCountChart extends Component{
  constructor (props) {
   super(props)
   this.state = {
     bounceValue: new Animated.Value(0.7)
   }
 }

 componentDidMount() {
   requestAnimationFrame(() => {
  			this._animateIn();
    });
  }

  _animateIn = () => {
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 1,                         // Animate to smaller size
        friction: 1,
      }
    ).start(this._animateOut);                // Start the animation
  }

  _animateOut = () => {
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate back
        friction: 1,
      }
    ).start(this._animateIn);                 // Start the animation
  }

 render() {
   const { books } = this.props
   let { bounceValue } = this.state

   return (
     <View style={styles.bookChart}>
     {this.props.books.sort(function(a,b) {
       debugger
       let aHeight = a.volumeInfo.ratingsCount ? a.volumeInfo.ratingsCount : 0
       let bHeight = b.volumeInfo.ratingsCount ? b.volumeInfo.ratingsCount : 0
       return bHeight - aHeight
     }).map(function(book, i) {
       let ratingsCountHeight = book.volumeInfo.ratingsCount ? book.volumeInfo.ratingsCount : 2
       if(ratingsCountHeight >= 30) {
         scoreColor = '#1E77E2'
       }
       if(ratingsCountHeight > 20 && ratingsCountHeight < 30) {
         scoreColor = '#6A5'
       }
       if(ratingsCountHeight > 10 && ratingsCountHeight < 20) {
         scoreColor = '#FED024'
       }
       if(ratingsCountHeight > 5 && ratingsCountHeight < 10) {
         scoreColor = '#FA5732'
       }
       if(ratingsCountHeight < 5) {
         scoreColor = '#C21515'
       }
       return (
         <View style={styles.bookChart} key={i}>
          <Animated.View
            style={[{transform: [{scale: bounceValue}], height: ratingsCountHeight,backgroundColor:scoreColor}, styles.bar, styles.barPageCount]}
          />
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
  barPageCount: {
  }
});
