import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/home';
import LedsControl from './components/control';

const Intrremot = StackNavigator({
  home: { screen: HomeScreen },
  control: { screen: LedsControl },
});

AppRegistry.registerComponent('Intrremot', () => Intrremot);
