/* @flow */

import React, { Component } from 'react';
import {
  Button,
  View,
  StatusBar,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Intrremot',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#673AB7',
    },
  }

  state = {
    text: ''
  }

  goToControl(url) {
    this.props.navigation.navigate('control', { url });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#673AB7' />

        <Text style={styles.text}>NodeMCU Url:</Text>

        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder='Url'
          keyboardType='url'
          underlineColorAndroid='rgba(0, 0, 0, 0)'
          autoCorrect={false}
          autoFocus
          onSubmitEditing={() => this.goToControl(this.state.text)}
        />

        <View style={styles.button}>
          <Button
            onPress={() => this.goToControl(this.state.text)}
            title='Ok'
            color='#673AB7'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 310,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    padding: 10,
  },

  text: {
    fontSize: 20,
    padding: 10,
  },

  button: {
    width: 150,
    padding: 10,
  },
});
