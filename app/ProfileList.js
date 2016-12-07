import React, { Component } from 'react';

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Row from './Row';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default class ProfileList extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView
          style={styles.scrollView}
        >
          <Row zIndex={100} profile={this.props.profile} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4A637D',
    flex: 1,
    padding: 10,
    paddingTop: STATUSBAR_HEIGHT,
  },
});
