import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <ListNavigator/>
    </NavigationContainer>

  );
};

export default App;