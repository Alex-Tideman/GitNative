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

export default class Profile extends Component{
  constructor (props) {
   super(props)
   this.state = {
   }
 }

 render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Profile</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    marginTop: 100,
    textAlign: 'center',
    fontSize: 42,
  },
});
