/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  onPressButton() {
    if (this.state.buttonOn) {
      this.props.onPressOff();
      this.setState({ buttonOn: false });
    } else {
      this.props.onPressOn();
      this.setState({ buttonOn: true });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.onPressButton()}>
        <View>
          <View
            style={[styles.container,
            this.state.buttonOn ? styles.containerOn : styles.containerOff]}
          >
            <Text style={styles.text}>{this.props.title}</Text>
            <Text style={styles.text}>{this.state.buttonOn ? 'ON' : 'OFF'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

CustonButton.propTypes = {
  onPressOn: PropTypes.func.isRequired,
  onPressOff: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 5,
  },
  containerOn: {
    backgroundColor: '#5E35B1',
    borderColor: '#532e96',
  },
  containerOff: {
    backgroundColor: '#14082e',
    borderColor: '#32195e',
  },
  text: {
    color: '#eeeeee',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
