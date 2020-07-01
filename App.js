import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'

import ListSettingScreen from './app/screens/ListSettingScreen'
import MessageScreen from './app/screens/MessageScreen'
import ShoppingItemDetail from './app/screens/ShoppingItemDetail'
import ShoppingItemForm from './app/components/forms/ShoppingItemForm'
import JoinForm from './app/components/forms/JoinForm'
import GroupForm from './app/components/forms/GroupForm'
import MessageDetailScreen from './app/screens/MessageDetailScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'

const App = () => {
  return (
    // <NavigationContainer>
    //   <AppNavigator/>
    // </NavigationContainer>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
};

export default App;