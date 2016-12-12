import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing
} from 'react-native'

export default class PageChart extends Component{
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
       let aHeight = a.volumeInfo.pageCount ? a.volumeInfo.pageCount : 0
       let bHeight = b.volumeInfo.pageCount ? b.volumeInfo.pageCount : 0
       return bHeight - aHeight
     }).map(function(book, i) {
       let pageHeight = book.volumeInfo.pageCount ? Math.round(book.volumeInfo.pageCount / 10) : 2
       if(pageHeight >= 80) {
         scoreColor = '#1E77E2'
       }
       if(pageHeight > 60 && pageHeight < 80) {
         scoreColor = '#6A5'
       }
       if(pageHeight > 40 && pageHeight < 60) {
         scoreColor = '#FED024'
       }
       if(pageHeight > 20 && pageHeight < 40) {
         scoreColor = '#FA5732'
       }
       if(pageHeight < 20) {
         scoreColor = '#C21515'
       }
       return (
         <View style={styles.bookChart} key={i}>
          <Animated.View
            style={[{transform: [{scale: bounceValue}], height: pageHeight,backgroundColor:scoreColor}, styles.bar, styles.barPageCount]}
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
