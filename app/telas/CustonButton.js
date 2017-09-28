/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class CustonButton extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <View style={styles.container}>
            {/*<View style={styles.ledStatus}></View>*/}
            <Text style={styles.text}>LED 1</Text>
            <Text style={styles.text}>ON</Text>
          </View>
        </View>

        <View>
          <View style={styles.containerOff}>
            {/*<View style={styles.ledStatusOff}></View>*/}
            <Text style={styles.text}>LED 2</Text>
            <Text style={styles.text}>OFF</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#5E35B1",
    borderColor: "#673AB7",
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
    backgroundColor: "#2b135a",
    borderColor: "#3e1e79",
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
