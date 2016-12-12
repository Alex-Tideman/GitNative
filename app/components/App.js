import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Login from './Login';
import Search from './Search';
import Visualize from './Visualize';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        // <Search books={this.props.books} getBooks={this.props.getBooks} />
        <Navigator style={styles.navigator}
          initialRoute={{ name: "Welcome"}}
          renderScene= { this.renderScene.bind(this) }
          navigationBar={
             <Navigator.NavigationBar
               style={ styles.nav }
               routeMapper={NavigationBarRouteMapper} />
             }
        />
    );
  }

  renderScene(route, navigator) {
    const { books, getBooks } = this.props
    if (route.name == "Welcome") {
      return <Login navigator={navigator} {...route.passProps} />
    }
    if (route.name == "Search") {
      return <Search navigator={navigator} {...route.passProps} books={books} getBooks={getBooks} />
    }
    if (route.name == "Visualize") {
      return <Visualize navigator={navigator} {...route.passProps} books={books} getBooks={getBooks} />
    }
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => {navigator.push({name: 'Visualize'})}}>
          <Text style={ styles.rightNavButtonText }>Visualize</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>googbrarian</Text>
  }
};

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
