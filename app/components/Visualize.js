import React, { Component } from 'react'
import { connect } from 'react-redux'

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
import RatingCountChart from './RatingCountChart'

const mapStateToProps = (state) => ({
  books: state.books
})

class Visualize extends Component {
  constructor (props) {
   super(props)
 }

 render() {
    return (
      <View style={styles.visualize} >
        <Text style={styles.chartTitle}>Reader Rating</Text>
        <RatingChart style={styles.chart} books={this.props.books} />
        <Text style={styles.chartTitle}>Rating Count</Text>
        <RatingCountChart style={styles.chart} books={this.props.books} />
        <Text style={styles.chartTitle}>Page Count</Text>
        <PageChart style={styles.chart} books={this.props.books} />
      </View>
    )
  }
}

export default connect(mapStateToProps)(Visualize);

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
