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

  constructor(props) {
    super(props);

    this.state = {
      url: '',
      directionColumn: true,
    };
  }

  componentWillMount() {
    const url = this.props.navigation.state.params.url;
    this.setState({ url });
  }

  onLayout(event) {
    const { height, width } = event.nativeEvent.layout;

    if (height > width) {
      this.setState({ directionColumn: true });
    } else {
      this.setState({ directionColumn: false });
    }
  }

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout.bind(this)}>
        <Text>Url: {this.state.url}</Text>

        <View
          style={this.state.directionColumn ? styles.containerColumn : styles.containerRow}
        >
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
  containerRow: {
    flexDirection: 'row',
  },
  containerColumn: {
    flexDirection: 'column',
  },
});
