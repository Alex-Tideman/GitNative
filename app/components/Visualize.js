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

import RatingChart from './RatingChart'
import PageChart from './PageChart'

export default class Visualize extends Component{
  constructor (props) {
   super(props)
   this.state = {
   }
 }

 render() {
    return (
      <View style={styles.visualize} >
        <Text style={styles.chartTitle}>Reader Rating</Text>
        <RatingChart style={styles.chart} books={this.props.books} />
        <Text style={styles.chartTitle}>Page Count</Text>
        <PageChart style={styles.chart} books={this.props.books} />
      </View>
    )
  }


}

const styles = StyleSheet.create({
  visualize: {
    flex: 1,
    marginTop: 100,
  },
  chartTitle: {
    textAlign: 'center',
    fontSize: 32,
  },
  chart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
  }
});
