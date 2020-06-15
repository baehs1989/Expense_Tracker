import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ListNavigator from './app/navigation/ListNavigator';
import ArchiveListScreen from './app/screens/ArchiveListScreen'

const App = () => {
  return (
    <NavigationContainer>
      <ListNavigator/>
    </NavigationContainer>
  );
};

export default App;