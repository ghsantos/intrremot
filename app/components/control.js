/* @flow */

import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CustonButton from './CustonButton'

export default class LedsControl extends Component {
  static navigationOptions = {
    title: 'Leds Control'
  }

  state = {
    url: ''
  }

  componentWillMount(){
    const url = this.props.navigation.state.params.url
    this.setState({ url })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Url: {this.state.url}</Text>

        <Button
          onPress={() => fetch('http://' + this.state.url + '/led1on')}
          title='Led1 on'
          color="#673AB7"
        />
        <Button
          onPress={() => fetch('http://' + this.state.url + '/led1off')}
          title='Led1 off'
          color="#673AB7"
        />

        <Button
          onPress={() => fetch('http://' + this.state.url + '/led2on')}
          title='Led2 on'
          color="#673AB7"
        />
        <Button
          onPress={() => fetch('http://' + this.state.url + '/led2off')}
          title='Led2 off'
          color="#673AB7"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
