import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

import {
  ThinGrayLine,
  ThickDarkGrayLine,
} from './Lines';

export default class Row extends Component {

  componentWillMount() {
    this.renderBackface = this.renderBackface.bind(this);
    this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
  }

  renderBlankFace() {
    return (
      <View
        style={{
          backgroundColor: '#D6EFFF',
          flex: 1,
        }}
      >
      </View>
    );
  }

  renderBackface() {
    const onPress = this.props.onPress;
    return (
      <View style={{ flex: 1 }}>

        <FoldView
          renderFrontface={this.renderBlankFace}
          renderBackface={this.renderInnerBackFace}
        >
        </FoldView>

      </View>
    );
  }

  renderInnerBackFace() {
    const onPress = this.props.onPress;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: '#BDC2C9',
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
        }}
      >
        <View
          style={{
            backgroundColor: '#FFBD18',
            flex: 1,
            margin: 14,
            borderRadius: 2,
          }}
        >
          <TouchableHighlight
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPress}
          >
            <Text>
              PRESS ME
            </Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }

  render() {
    const onPress = this.props.onPress;
    const profile = this.props.profile

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#2b2b2b',
          flexDirection: 'column',
        }}
      >
          <View style={{ flex: 1 }}>
          <View
            style={{
              marginTop: 50,
              flexDirection: 'row',
            }}
          >

            <TouchableHighlight
              onPress={onPress}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  backgroundColor: '#BDC2C9',
                }} >
                <Text>Fold</Text>
                </View>
            </TouchableHighlight>
          </View>
            <Text
              style={{
                marginBottom: 10,
                color: '#fff',
                fontSize: 24,
                textAlign: 'center',
              }} >
              {profile.name}
            </Text>
            <Image
              style={{
                  alignSelf: 'center',
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                }}
              source={{uri: profile.picture}}
            />
          </View>
      </View>
    );
  }
}
