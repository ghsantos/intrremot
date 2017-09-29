import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './telas/home';
import LedsControl from './telas/control'

const Intrremot = StackNavigator ({
  home: { screen: HomeScreen },
  control: { screen: LedsControl },
})

AppRegistry.registerComponent('Intrremot', () => Intrremot);
