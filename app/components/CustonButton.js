/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class CustonButton extends Component {
  state = {
    buttonOn: true,
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {this.setState({buttonOn: !this.state.buttonOn})}}>
        <View>
          <View style={this.state.buttonOn ? styles.containerOn : styles.containerOff}>
            {/*<View style={styles.ledStatus}></View>*/}
            <Text style={styles.text}>LED 1</Text>
            <Text style={styles.text}>{this.state.buttonOn ? 'ON' : 'OFF'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerOn: {
    margin: 10,
    backgroundColor: "#5E35B1",
    borderColor: "#532e96",
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 5,
  },
  text: {
    color: '#eeeeee',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ledStatus: {
    backgroundColor: "#FFFFFF",
    width: 14,
    height: 14,
    borderRadius: 7,
    marginBottom: 30,
  },
  containerOff: {
    margin: 10,
    backgroundColor: "#14082e",
    borderColor: "#32195e",
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 5,
  },
  ledStatusOff: {
    backgroundColor: "#302a3a",
    width: 14,
    height: 14,
    borderRadius: 7,
    marginBottom: 30,
  },
});
