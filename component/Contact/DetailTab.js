import React from 'react';
import { Text } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import Home from './Home';

const DetailTab = createMaterialTopTabNavigator(
  {
    Info: Home,
    Menu: Home,
    Review: Home,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: '#80868B',
      activeBackgroundColor: 'transparent',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: 'transparent',
      },
      style: {
        backgroundColor: 'white',
      },
      indicatorStyle: {
        backgroundColor: 'blue',
      },
    },
  }
);

export default createAppContainer(DetailTab);
