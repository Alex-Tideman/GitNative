import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Search from './Search';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props
    return (
      <Search books={books} />
    )
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  title: {
    marginTop:4,
    fontSize:16,
  },
  leftNavButtonText: {
   	fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef',
  }
});
