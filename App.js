import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import AppNavigator from './app/navigation/AppNavigator'

import ListSettingScreen from './app/screens/ListSettingScreen'
import MessageScreen from './app/screens/MessageScreen'
import ShoppingItemDetail from './app/screens/ShoppingItemDetail'


import DeckSwiperExample from './app/components/DeckSwiperExample'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    // <ShoppingItemDetail/>
  );
};

export default App;