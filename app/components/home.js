/* @flow */

import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Intrremot'
  }

  state = {
    text: ''
  }

  goToControl(url){
    this.props.navigation.navigate('control', { url })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>NodeMcu Url:</Text>

        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        <Button
          onPress={() => this.goToControl(this.state.text)}
          title="Ok"
          color="#673AB7"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    'alignItems': 'center',
  },

  input: {
    width: 300,
    height: 50,
  },

  text: {
    fontSize: 20,
  }
});
