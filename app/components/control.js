/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CustonButton from './CustonButton';

export default class LedsControl extends Component {
  static navigationOptions = {
    title: 'Leds Control',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#673AB7',
    },
  }

  state = {
    url: ''
  }

  componentWillMount() {
    const url = this.props.navigation.state.params.url;
    this.setState({ url });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Url: {this.state.url}</Text>

        <CustonButton
          onPressOn={() => fetch(`http://${this.state.url}/led1on`)}
          onPressOff={() => fetch(`http://${this.state.url}/led1off`)}
          title='LED 1'
        />

        <CustonButton
          onPressOn={() => fetch(`http://${this.state.url}/led2on`)}
          onPressOff={() => fetch(`http://${this.state.url}/led2off`)}
          title='LED 2'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
