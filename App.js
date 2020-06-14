import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import WishListScreen from './app/screens/WishListScreen'

const App = () => {
  return (
    <NavigationContainer>
      <ListNavigator/>
    </NavigationContainer>
    // <WishListScreen/>
  );
};

export default App;