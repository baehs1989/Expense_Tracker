import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import AppNavigator from './app/navigation/AppNavigator'

import ListSettingScreen from './app/screens/ListSettingScreen'
import MessageScreen from './app/screens/MessageScreen'
import ShoppingItemDetail from './app/screens/ShoppingItemDetail'
import ShoppingItemForm from './app/components/forms/ShoppingItemForm'
import JoinForm from './app/components/forms/JoinForm'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    // <JoinForm/>
  );
};

export default App;